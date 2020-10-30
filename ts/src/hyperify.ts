export class Component {
    element: HTMLElement;

    constructor(arg: string | HTMLElement) {
        if (typeof arg === 'string') {
            this.element = document.querySelector(arg);
        } else {
            this.element = arg as HTMLElement;
        }
    }
}