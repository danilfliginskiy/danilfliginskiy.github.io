window.addEventListener('DOMContentLoaded', () => {

  $( document ).ready(function() {


    //hamburger

    var $button = $('#hamburger');
    menuItem  = document.querySelectorAll('.header__link');
    menu      = document.querySelector('.header__menu');

    menuItem.forEach(item => { //clicking on the navigation link
      item.addEventListener('click', () => {
        menu.classList.toggle('header__menu_active');
        $button.removeClass('open');
        $button.addClass('close');
        $('body').css({
          'overflow':'visible'
        });
        $('.header__overlay').removeClass('header__overlay_active');
      });
    });

    $button.on('click', function(e){
      e.preventDefault();
      $('[data-modal = consultation]').removeClass('modal_active');
      $('[data-modal = payment]').removeClass('modal_active');
      if( $button.hasClass('open') ){
        $('.header__menu').toggleClass('header__menu_active');
        $button.removeClass('open');
        $button.addClass('close');
        $('body').css({
          'overflow':'visible'
        });
        $('.header__overlay').removeClass('header__overlay_active');
      } else {
        $('.header__menu').toggleClass('header__menu_active');
        $button.removeClass('close');
        $button.addClass('open');
        $('.overlay, #consultation, #thanks, #payment').fadeOut('slow');
        $('body').css({
          'overflow':'hidden'
        });
        $('.header__overlay').addClass('header__overlay_active');
      }
    });

    const headerOverlay = document.querySelector('.header__overlay');

    headerOverlay.addEventListener('click', e => {

        const target = e.target;
        
        if (target === headerOverlay) {
          $('.header__menu').removeClass('header__menu_active');
          $button.addClass('close');
          $button.removeClass('open');
          $('body').css({
            'overflow':'visible'
          });
          $('.header__overlay').removeClass('header__overlay_active');
        }
        
    });

    //buttons on cards
  
    $('.button_price').each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.prices__front').eq(i).addClass('prices__front_active');
        $('.prices__back').eq(i).addClass('prices__back_active');
      });
    });
  
    $('.button_price-back').each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.prices__front').eq(i).removeClass('prices__front_active');
        $('.prices__back').eq(i).removeClass('prices__back_active');
      });
    });
  
    //slider in reviews
  
    $(document).ready(function(){
      $('.carousel').slick({
        speed: 1000,
        slidesToShow: 3,
        centerMode: true,
        responsive: [
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              fade: true
            }
          }
        ]
      });
    });
  
    //smooth scroll to up
  
    $(window).scroll(function(){
      if ($(this).scrollTop() > 1300) {
        $('.pageup').fadeIn('slow');
      } else {
        $('.pageup').fadeOut('slow');
      }
    });
  
    $(function(){
      $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });
    });
  
    //modal
  
    $('[data-modal = consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn('slow');
      $('[data-modal = consultation]').addClass('modal_active');
      $('body').css({
        'overflow':'hidden'
      });
    });
    
    $('[data-modal = payment]').on('click', function(){
      $('.overlay, #payment').fadeIn('slow');
      $('[data-modal = payment]').addClass('modal_active');
      $('body').css({
        'overflow':'hidden'
      });
    });
  
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #thanks, #payment').fadeOut('slow');
      $('body').css({
        'overflow':'visible'
      });
    });

    $('.overlay').on('click', function(event){

        const target = event.target;

        if ( target.closest('.modal') ) {} else {
          $('.overlay, #consultation, #thanks, #payment').fadeOut('slow');
          $('body').css({
            'overflow':'visible'
          });
        }
      });

    window.onkeydown = function(event) {
      if ( event.keyCode == 27 ) {
        $('.overlay, #consultation, #thanks, #payment').fadeOut('slow');
        $('body').css({
          'overflow':'visible'
        });
      }
    };
  
    //validate
  
    $('#consultation-form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Введите Ваше имя",
          minlength: jQuery.validator.format("Нужно ввести больше {0} символов")
        },
        phone: "Введите Ваш номер телефона",
        email: {
          required: "Введите свою почту",
          email: "Проверьте правильность ввода почты"
        }
      }
    });
    $('#questions-form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        },
        message: "required"
      },
      messages: {
        name: {
          required: "Введите Ваше имя",
          minlength: jQuery.validator.format("Нужно ввести больше {0} символов")
        },
        phone: "Введите Ваш номер телефона",
        email: {
          required: "Введите свою почту",
          email: "Проверьте правильность ввода почты"
        },
        message: "Введите ваше сообщение"
      }
    });
    $('#consultation form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Введите Ваше имя",
          minlength: jQuery.validator.format("Нужно ввести больше {0} символов")
        },
        phone: "Введите Ваш номер телефона",
        email: {
          required: "Введите свою почту",
          email: "Проверьте правильность ввода почты"
        }
      }
    });
    $('#payment form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        },
        choice: "required"
      },
      messages: {
        name: {
          required: "Введите Ваше имя",
          minlength: jQuery.validator.format("Нужно ввести больше {0} символов")
        },
        phone: "Введите Ваш номер телефона",
        email: {
          required: "Введите свою почту",
          email: "Проверьте правильность ввода почты"
        },
        choice: "Выберите способ доставки"
      }
    });
  
    //mask for phone
  
    $('input[name=phone]').mask("+7 (999) 999-99-99");
  
    //mailer
  
    $('form').submit(function(e){
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function(){
        $(this).find("input").val("");
  
        $('#consultation, #payment').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
  
        $('form').trigger('reset');
      });
      return false;
    });
  
  
  });
});