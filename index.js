const menuLinks = document.querySelector('.navbar__menu')
const menu = document.querySelector('#navbar__toggle')


menu.addEventListener('click', ()=>{
    menuLinks.classList.toggle('active')
    console.log('clicked');
})

document.addEventListener('keypress',()=>{
    console.log('doocu');
    menuLinks.classList.toggle("active");
})