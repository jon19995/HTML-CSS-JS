
// Активное меню

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    overlay = document.querySelector('.overlay'),
    closeEl = document.querySelector('.menu__close');

hamburger.addEventListener('click', () =>{
    menu.classList.add('menu__active', 'animate__animated', 'animate__bounceInLeft');
    overlay.classList.add('overlay__active');
});
closeEl.addEventListener('click', () =>{
    menu.classList.remove('menu__active', 'animate__animated', 'animate__bounceInLeft');
    overlay.classList.remove('overlay__active');
});

// статус навыков

const progress = document.querySelectorAll('.progress__status'),
    lines = document.querySelectorAll('.progress__line-status');

progress.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
