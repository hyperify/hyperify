var hyperify = (function (exports) {
    'use strict';

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

    return exports;

}({}));
//# sourceMappingURL=hyperify.js.map
