export default class Button {
    name = 'btn'
}

window.addEventListener('load', () => {
    const btnList = document.querySelectorAll('.hyper-btn');

    for (const btn of btnList) {
        btn.addEventListener('click', () => {
            btn.classList.add('active')

            setTimeout(() => {
                btn.classList.remove('active')
            }, 300)
        });
    }
})