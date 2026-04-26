const btn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
btn.addEventListener('click',()=>{
    menu.classList.toggle("is-active")
    btn.classList.toggle("is-active")
})