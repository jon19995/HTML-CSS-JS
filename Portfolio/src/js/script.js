
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

// Плавная прокрутка по якорным ссылкам




$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    const $this = $(this),
        blockId = $this.data('scroll');
        blockOffset = $(blockId).offset().top;


    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);


});
$(".portfolio__back_not-ready").on("click", function(event) {
    event.preventDefault();
});

const form = document.querySelector('form');

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #mini').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});