(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.hyperify = {}));
}(this, (function (exports) { 'use strict';

    class Button {
        constructor() {
            this.name = 'btn';
        }
    }
    window.addEventListener('load', () => {
        const btnList = document.querySelectorAll('.hyper-btn');
        for (const btn of btnList) {
            btn.addEventListener('click', () => {
                btn.classList.add('active');
                setTimeout(() => {
                    btn.classList.remove('active');
                }, 300);
            });
        }
    });

    exports.Button = Button;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=hyperify.umd.js.map
