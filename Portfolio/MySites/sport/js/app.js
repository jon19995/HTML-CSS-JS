$(document).ready(function(){

    // Карусель, слайдер
    $('.carousel__inner').slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: `<button type="button" class="slick-prev"><div class="slick_btn_prev"></div></button>`,
        nextArrow: `<button type="button" class="slick-next"><div class="slick_btn_next"></div></button>`,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            }           
        ]
    });

    // Табы
    $('.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    //   Подробнее о товаре
    

    function toggleSlide(item){

        $(item).each(function(i) {

            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__back-face').eq(i).toggleClass('catalog-item__back-face_active');
            })
        });

    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Модальные окна
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();

    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #mini').fadeOut();
    })

    
    $('.button_buy').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    // Добавление маски для для ввода номера
    $(".feed-form input[name=phone]").mask("+7(999) 999-99-99");

    // отправка писем

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

    // up

    $(window).scroll(function(){
        if($(this).scrollTop() > 1600) {
            $('.scroll-top').fadeIn('slow');
        }else {
            $('.scroll-top').fadeOut('slow');
        }
    });

// Плавный скролл

    $("a[href=#up]").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
    
  });