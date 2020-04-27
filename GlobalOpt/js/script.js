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