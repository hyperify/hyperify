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

    class Alert extends Component {
        constructor(arg) {
            super(arg);
        }
        dismiss() {
            return dismiss(this.element);
        }
        present() {
            return present(this.element);
        }
    }
    Alert.SELECTORS = '.hyper-alert';
    Alert.CLOSE_BTN_SELECTORS = '.hyper-alert-close-btn';
    const px = 'px';
    const rate = 10;
    const dismiss = (alert) => {
        const style = window.getComputedStyle(alert, null);
        let height = parseInt(style['height']);
        let marginTop = parseInt(style['marginTop']);
        let marginBottom = parseInt(style['marginBottom']);
        let paddingTop = parseInt(style['paddingTop']);
        let paddingBottom = parseInt(style['paddingBottom']);
        let opacity = parseInt(style['opacity']);
        const heightDec = height / rate;
        const marginTopDec = marginTop / rate;
        const marginBottomDec = marginBottom / rate;
        const paddingTopDec = paddingTop / rate;
        const paddingBottomDec = paddingBottom / rate;
        const opacityDec = opacity / rate;
        const render = () => {
            if (heightDec) {
                height -= heightDec;
                alert.style.height = height + px;
            }
            if (marginTopDec) {
                marginTop -= marginTopDec;
                alert.style.marginTop = marginTop + px;
            }
            if (marginBottomDec) {
                marginBottom -= marginBottomDec;
                alert.style.marginBottom = marginBottom + px;
            }
            if (paddingTopDec) {
                paddingTop -= paddingTopDec;
                alert.style.paddingTop = paddingTop + px;
            }
            if (paddingBottomDec) {
                paddingBottom -= paddingBottomDec;
                alert.style.paddingBottom = paddingBottom + px;
            }
            if (opacityDec) {
                opacity -= opacityDec;
                alert.style.opacity = opacity + '';
            }
            if (height > 0) {
                return window.requestAnimationFrame(render);
            }
            alert.style.display = 'none';
            alert.style.height = null;
            alert.style.marginTop = null;
            alert.style.marginBottom = null;
            alert.style.paddingTop = null;
            alert.style.paddingBottom = null;
            alert.style.opacity = null;
        };
        window.requestAnimationFrame(render);
    };
    const present = (alert) => {
        alert.style.display = null;
        const style = window.getComputedStyle(alert, null);
        const _height = parseInt(style['height']);
        let height = parseInt(style['height']);
        let marginTop = parseInt(style['marginTop']);
        let marginBottom = parseInt(style['marginBottom']);
        let paddingTop = parseInt(style['paddingTop']);
        let paddingBottom = parseInt(style['paddingBottom']);
        let opacity = parseInt(style['opacity']);
        const zero = 0 + '';
        alert.style.height = zero;
        alert.style.marginTop = zero;
        alert.style.marginBottom = zero;
        alert.style.paddingTop = zero;
        alert.style.paddingBottom = zero;
        alert.style.opacity = zero;
        const heightInc = height / rate;
        const marginTopInc = marginTop / rate;
        const marginBottomInc = marginBottom / rate;
        const paddingTopInc = paddingTop / rate;
        const paddingBottomInc = paddingBottom / rate;
        const opacityInc = opacity / rate;
        height = 0;
        marginTop = 0;
        marginBottom = 0;
        paddingTop = 0;
        paddingBottom = 0;
        opacity = 0;
        const render = () => {
            if (heightInc) {
                height += heightInc;
                alert.style.height = height + px;
            }
            if (marginTopInc) {
                marginTop += marginTopInc;
                alert.style.marginTop = marginTop + px;
            }
            if (marginBottomInc) {
                marginBottom += marginBottomInc;
                alert.style.marginBottom = marginBottom + px;
            }
            if (paddingTopInc) {
                paddingTop += paddingTopInc;
                alert.style.paddingTop = paddingTop + px;
            }
            if (paddingBottomInc) {
                paddingBottom += paddingBottomInc;
                alert.style.paddingBottom = paddingBottom + px;
            }
            if (opacityInc) {
                opacity += opacityInc;
                alert.style.opacity = opacity + '';
            }
            if (height < _height) {
                return window.requestAnimationFrame(render);
            }
            alert.style.height = null;
            alert.style.marginTop = null;
            alert.style.marginBottom = null;
            alert.style.paddingTop = null;
            alert.style.paddingBottom = null;
            alert.style.opacity = null;
        };
        window.requestAnimationFrame(render);
    };
    window.addEventListener('load', () => {
        const list = document.querySelectorAll('.hyper-alert-close-btn');
        for (const btn of list) {
            btn.addEventListener('click', () => {
                dismiss(btn.parentElement);
            }, { once: true });
        }
    });

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

    exports.Alert = Alert;
    exports.Button = Button;

    Object.defineProperty(exports, '__esModule', { value: true });

});
//# sourceMappingURL=hyperify.amd.js.map
