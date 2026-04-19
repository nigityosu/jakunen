const menubutn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let active = false;
menubutn.addEventListener('click',()=>{
    if(active == false){
        menu.classList.add('is-active');
        menubutn.classList.add('is-active');
        active = true;
    }
    else{
        menu.classList.remove('is-active');
        menubutn.classList.remove('is-active');
        active = false;
    }
});
