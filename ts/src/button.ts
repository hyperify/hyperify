import { Component } from './hyperify';

export default class Button extends Component {
    static readonly SELECTORS = '.hyper-btn';

    constructor(arg: string | HTMLElement) {
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

interface IButton extends HTMLElement {
    activeTimer: number;
}

window.addEventListener('load', () => {
    const list = document.querySelectorAll(Button.SELECTORS) as NodeListOf<IButton>;

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