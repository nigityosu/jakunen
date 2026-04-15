const menubutn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let opens = false
menubutn.addEventListener('click', ()=>{
    if(opens == false){
        menu.classList.add('is-active');
        menubutn.classList.add('is-active');
        opens = true;
    }
    else{
        menu.classList.remove('is-active');
        menubutn.classList.remove('is-active');
        opens = false
    }
})