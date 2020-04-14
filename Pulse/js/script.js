var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    autoHeight: true
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  })

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  })

  let tabs          = document.querySelectorAll('.catalog__tab'),
  contents      = document.querySelectorAll('.catalog__content'),
  activeElement = 0;

if(tabs.length == contents.length) {
contents[activeElement].style.display = 'flex'
tabs[activeElement].classList.add('catalog__tab_active')

tabs.forEach((tab, id) => {

tab.addEventListener('click', function() {

  tabs.forEach(item => {
    item.classList.remove('catalog__tab_active')
  })

  tab.classList.add('catalog__tab_active')

  contents.forEach(content => {
    content.style.display = 'none'
  })

  contents[id].style.display = 'flex'
})
})

} else {
document.querySelector('.catalog__content').innerHTML = 'Error'
}

$(document).ready(function(){

  // catalog

  $('.catalog-item__link').each(function(i){
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  });

  $('.catalog-item__back-link').each(function(i){
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  });

  // modal

  $('[data-modal = consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  $('.button_catalog').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  //validate

  function valideForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Введите ваше имя",
          minlength: jQuery.validator.format("Введите минимум {0} символа")
        },
        phone: "Пожалуйста, введите ваш номер телефона",
        email: {
          required: "Пожалуйста, введите вашу почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  };

  valideForms('#order form');
  valideForms('#consultation-form');
  valideForms('#consultation form');

  // phone mask

  $('input[name = phone]').mask("+7 (999) 999-99-99");

  //mail

  $('form').submit(function(e) {
    e.preventDefault();
    console.log(123);
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
  });

});
