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

export { Button };
//# sourceMappingURL=hyperify.esm.js.map
