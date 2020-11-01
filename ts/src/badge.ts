export default class Badge {
    static readonly SELECTOR = '.hyper-badge'
}

interface IBadge extends HTMLElement {
    activeTimer: number;
}

window.addEventListener('load', () => {
    const list = document.querySelectorAll('a' + Badge.SELECTOR) as NodeListOf<IBadge>;

    for (const badge of list) {
        badge.addEventListener('click', () => {
            badge.activeTimer && clearTimeout(badge.activeTimer);
            badge.classList.add('active');

            badge.activeTimer = window.setTimeout(() => {
                badge.classList.remove('active');
                badge.activeTimer = null;
            }, 300);
        });
    }
});