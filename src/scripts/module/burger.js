const nav = document.querySelector('.header__burger');
const navList = document.querySelector('.header__nav')
nav.addEventListener('click',(event) => {
    nav.classList.toggle('open');
    navList.classList.toggle('header__nav_active')
});