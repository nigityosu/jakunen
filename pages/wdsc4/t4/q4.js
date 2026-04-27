const btn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
btn.addEventListener('click', ()=> {
    btn.classList.toggle("is-active")
    menu.classList.toggle("is-active")
})