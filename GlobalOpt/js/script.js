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


});