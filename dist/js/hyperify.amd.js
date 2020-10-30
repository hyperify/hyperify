define(['exports'], function (exports) { 'use strict';

    class Component {
        constructor(arg) {
            if (typeof arg === 'string') {
                this.element = document.querySelector(arg);
            }
            else {
                this.element = arg;
            }
        }
    }

    class Button extends Component {
        constructor(arg) {
            super(arg);
        }
        disable() {
            this.element.classList.add('disabled');
        }
        enable() {
            this.element.classList.remove('disabled');
            this.element.removeAttribute('disabled');
        }
        isDisable() {
            return this.element.classList.contains('disabled');
        }
        loading() {
            this.element.classList.add('loading');
        }
        finish() {
            this.element.classList.remove('loading');
        }
        isLoading() {
            return this.element.classList.contains('loading');
        }
    }
    Button.SELECTORS = '.hyper-btn';
    window.addEventListener('load', () => {
        const list = document.querySelectorAll(Button.SELECTORS);
        for (const btn of list) {
            btn.addEventListener('click', () => {
                btn.activeTimer && clearTimeout(btn.activeTimer);
                btn.classList.add('active');
                btn.activeTimer = window.setTimeout(() => {
                    btn.classList.remove('active');
                    btn.activeTimer = null;
                }, 300);
            });
        }
    });

    exports.Button = Button;

    Object.defineProperty(exports, '__esModule', { value: true });

});
//# sourceMappingURL=hyperify.amd.js.map
