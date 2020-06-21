// меню гамбургер

window.addEventListener('DOMContentLoaded', () => {
  const btn       = document.querySelector("#hamburger"),
        lines     = btn.querySelectorAll(".line"),
        cls       = { open: "open", close: "close" },
        menu      = document.querySelector('.header__menu'),
        menuItem  = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');
  let btnClass = cls.open;

  btn.addEventListener("click", () => {
    if (btn.classList.contains(cls.open)) {
      btn.classList.toggle(btnClass);
      btnClass = cls.close;
    } else if (btn.classList.contains(cls.close)) {
      btn.classList.toggle(btnClass);
      btnClass = cls.open;
    };

    void btn.offsetWidth;
    btn.classList.add(btnClass);
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.toggle('header__menu_active');
      btn.classList.toggle(btnClass);
      btnClass = cls.open;
    });
  });

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('header__menu_active');
  });
});

$( document ).ready(function() {
  

  // кнопки на карточках

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

  //слайдер в блоке с отзывами

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
  });
  
  $('[data-modal = payment]').on('click', function(){
    $('.overlay, #payment').fadeIn('slow');
  });

  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #thanks, #payment').fadeOut('slow');
  });

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
      select: "required"
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
      select: "Выберите способ доставки"
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