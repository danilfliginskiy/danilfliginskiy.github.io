window.addEventListener('DOMContentLoaded', () => {

    $(document).ready(function(){
  
      //sliders
  
      $('.carousel').on('init reInit',function(event,slick){
        var amount = slick.slideCount;
        $('.range').attr('max',amount);
      })
      
      $('.carousel').on('afterChange',function(e,slick,currentSlide){
        $('.range').val(currentSlide+1);
      })
      
      $('.range').on('input change',function(){
        $('.carousel').slick('slickGoTo',this.value-1);
      });
      
      $('.carousel').slick({
        slidesToShow:2,
        dots:false,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: false,
        pauseOnFocus: false
      });

      $('.carousel_catalog').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        draggable: false,
        speed: 1000
      });

      $('.carousel_gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        draggable: false,
        speed: 1000
      });

      //buttons in paragraph

      $('.about__button').click(function() {
        $(this)
          .siblings('.about__button')
          .addBack()
          .toggleClass('about__button_active')
          .siblings('.about__text')
          .slice(2)
          .toggleClass('about__text_active');
      });

      //tabs

      let tabs      = document.querySelectorAll('.catalog__tab'),
      contents      = document.querySelectorAll('.carousel_catalog'),
      activeElement = 0;

      tabs[activeElement].classList.add('catalog__tab_active')

      tabs.forEach((tab, id) => {

        tab.addEventListener('click', function() {

          tabs.forEach(item => {
            item.classList.remove('catalog__tab_active');
          });

          tab.classList.add('catalog__tab_active');

          contents.forEach(content => {
            content.classList.remove('carousel_catalog_active');
          });

          contents[id].classList.add('carousel_catalog_active');
          $('.carousel_catalog').slick('setPosition');
          
        });
      });

      //advantages slider and tabs

      const carouselItems     = document.querySelectorAll(".carousel__item"),
            dogsCatalog       = document.querySelector("#dogs-catalog"),
            dogsTab           = document.querySelector("#dogs-tab"),
            catsCatalog       = document.querySelector("#cats-catalog"),
            catsTab           = document.querySelector("#cats-tab"),
            parrotsCatalog    = document.querySelector("#parrots-catalog"),
            parrotsTab        = document.querySelector("#parrots-tab"),
            hamstersCatalog   = document.querySelector("#hamsters-catalog"),
            hamstersTab       = document.querySelector("#hamsters-tab"),
            monkeysCatalog    = document.querySelector("#monkeys-catalog"),
            monkeysTab        = document.querySelector("#monkeys-tab");

      function scrollToCatalog (animalCatalog, animalTab) {

        const catalogActive     = document.querySelector(".carousel_catalog_active"),
              tabActive         = document.querySelector(".catalog__tab_active");

        catalogActive.classList.remove('carousel_catalog_active');
        animalCatalog.classList.add('carousel_catalog_active');

        tabActive.classList.remove('catalog__tab_active');
        animalTab.classList.add('catalog__tab_active');

        animalTab.scrollIntoView(({behavior: "smooth"}));

        $('.carousel_catalog').slick('setPosition');

      }

      for (let i = 0; i < carouselItems.length; ++i) {

        carouselItems[i].addEventListener('click', () => {
          
          if (i === 2 || i === 7) {
            scrollToCatalog(dogsCatalog, dogsTab);
          } else if (i === 3) {
            scrollToCatalog(catsCatalog, catsTab);
          } else if (i === 4) {
            scrollToCatalog(parrotsCatalog, parrotsTab);
          } else if (i === 5) {
            scrollToCatalog(hamstersCatalog, hamstersTab);
          } else if (i === 6) {
            scrollToCatalog(monkeysCatalog, monkeysTab);
          }

        });

      }

      //gallery carousel

      $('.gallery__img').each(function(i){
        $(this).on('click', function(){
          $('.overlay, #galleryPhoto').fadeIn('slow');
          $('body').css({
            'overflow':'hidden'
          });
          $('.carousel_gallery').slick('setPosition');
        });
      });

      const galleryImg          = document.querySelectorAll('.gallery__img'),
            carouselGalleryItem = document.querySelectorAll('.carousel_gallery__item');

      galleryImg.forEach((item, i) => {

        item.addEventListener('click', () => {

          $('.carousel_gallery').slick('slickGoTo',i);

        });

      });

      //cart modal

      $('.basket__arrow, .basket__icon').each(function(){

        $(this).on('click', function(){
          $('.overlay, #modalCart').fadeIn('slow');
          $('body').css({
            'overflow':'hidden'
          });
        });

      });

      //modal settings

      $('.modal__close').on('click', function(){

        $('.overlay, #galleryPhoto, #modalCart').fadeOut('slow');
        $('body').css({
          'overflow':'visible'
        });

      });
  
      $('.overlay').on('click', function(event){

        const target = event.target;

        if ( target.closest('.modal') ) {} else {
          $('.overlay, #galleryPhoto, #modalCart').fadeOut('slow');
          $('body').css({
            'overflow':'visible'
          });
        }

      });
  
      window.onkeydown = function(event) {

        if ( event.code == 'Escape' ) {
          $('.overlay, #galleryPhoto, #modalCart').fadeOut('slow');
          $('body').css({
            'overflow':'visible'
          });
        }

      };

      //smooth scroll to up

      $(window).scroll(function(){
        if ($(this).scrollTop() > 1000) {
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
  
    });

    //validate forms

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
        message: "required",
        data: "required",
        policy: "required",
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
        message: "Введите ваше сообщение",
        data: "Покажите свое согласие",
        policy: "Покажите свое согласие",
        choice: "Выберите один из пунктов"
      }
    });

    //mask for phone
  
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    //hamburger

    var $button = $('#hamburger');
    menuItem  = document.querySelectorAll('.header__link');
    menu      = document.querySelector('.header__navigation');

    menuItem.forEach(item => { //clicking on the navigation link
      item.addEventListener('click', () => {
        menu.classList.toggle('header__navigation_active');
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
        $('.header__navigation').toggleClass('header__navigation_active');
        $button.removeClass('open');
        $button.addClass('close');
        $('body').css({
          'overflow':'visible'
        });
        $('.header__overlay').removeClass('header__overlay_active');
      } else {
        $('.header__navigation').toggleClass('header__navigation_active');
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
          $('.header__navigation').removeClass('header__navigation_active');
          $button.addClass('close');
          $button.removeClass('open');
          $('body').css({
            'overflow':'visible'
          });
          $('.header__overlay').removeClass('header__overlay_active');
        }
        
    });

    //end JQUERY



    //cart

    var d                 = document,
        itemBox           = d.querySelectorAll('.carousel_catalog__item'), // блок каждого товара
        cartCont          = d.getElementById('cart'), // блок вывода данных корзины
        basketSum         = d.querySelector('.basket__sum'),
        modalCartTotalNum = d.querySelector('.modal_cart__total-num');

    // Получаем данные из LocalStorage
    function getCartData(){
      return JSON.parse(localStorage.getItem('cart'));
    }

    // Записываем данные в LocalStorage
    function setCartData(o){
      localStorage.setItem('cart', JSON.stringify(o));
    }

    // Выводим итоговую сумму в нужные места 
    function addPrice(e) {
      var cartData  = getCartData();

      if(cartData !== null){
        basketSum.innerHTML = cartData[16] + ' р.';
        modalCartTotalNum.innerHTML = cartData[16] + ' р.';
      }
    }

    addPrice();

    // Добавляем товар в корзину
    function addToCart(e){
      this.disabled = true; // блокируем кнопку на время операции с корзиной
      var cartData  = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
          itemId    = this.getAttribute('data-id'), // ID товара
          parentBox = this.closest('.carousel_catalog__item'),
          itemTitle = parentBox.querySelector('.carousel_catalog__main-title').innerHTML, // название товара
          itemPrice = parentBox.querySelector('.carousel_catalog__footer-price').innerHTML, // стоимость товара
          price     = itemPrice.split(' ').join(''),
          succes    = parentBox.querySelector('.succes');
          
      if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
        cartData[itemId][2] += 1;
      } else { // если товара в корзине еще нет, то добавляем в объект
        cartData[itemId] = [itemTitle, +price, 1];
      }

      if(cartData.hasOwnProperty(16)){ // если цена уже имеется, то добавляем новое значение
        cartData[16] += +price;
      } else { // если цены нет, то создаем ее
        cartData[16] = +price;
      }

      if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
        this.disabled = false; // разблокируем кнопку после обновления LS
      }

      addPrice();

      succes.innerHTML = 'Товар добавлен в корзину';
      setTimeout(function() { succes.innerHTML = ''; }, 1500);

      return false;
    }

    // Удаляем элемен при клике на крестик
    function deleteItem(e){

      var cartData = getCartData(),
          close    = cartCont.querySelectorAll('.cart__close'),
          parent   = document.querySelectorAll('.cart__item');

      close.forEach((item, index) => {
        item.addEventListener('click', () => {

          var price = +cartData[index + 1][+1] * +cartData[index + 1][+2];

          cartData[16] -= price;

          delete(cartData[index + 1]);
          parent[index].style.display = 'none';

          setCartData(cartData);

          addPrice();

        });
      });

      return false;

    }

    // Открываем корзину со списком добавленных товаров
    function openCart(e){
      var cartData = getCartData(), // вытаскиваем все данные корзины
          totalItems = '';
      // если что-то в корзине уже есть, начинаем формировать данные для вывода
      if(cartData !== null){
        totalItems = '<div class="cart__header"><div class="cart__names">Имя друга</div><div class="cart__prices">Цена</div><div class="cart__quantitys">Количество</div></div>';
        for(var items in cartData){
          totalItems += '<div class="cart__item">';
          for(var i = 0; i < cartData[items].length; i++){
            totalItems += '<div>' + cartData[items][i] + '</div>';
          }
          totalItems += '<div class="cart__close">&times;</div>';
          totalItems += '</div>';
        }
        totalItems += '</div>';
        cartCont.innerHTML = totalItems;
        cartCont.style.fontWeight = 500;
      } else {
        // если в корзине пусто, то сигнализируем об этом
        cartCont.innerHTML = 'В корзине пусто!';
        cartCont.style.fontWeight = 700;
        cartCont.style.marginTop = 40 + 'px';
      }
      deleteItem();
      return false;
    }

    // Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
    for(var i = 0; i < itemBox.length; i++){
      const buttonCatalog = itemBox[i].querySelector('.button_catalog');
      buttonCatalog.addEventListener('click', addToCart);
    }

    /* Открыть корзину */
    const openBasket = document.querySelector('.basket__arrow, .basket__icon');
    openBasket.addEventListener('click', openCart);

    /* Очистить корзину */
    const resetCart = document.getElementById('resetCart');
    resetCart.addEventListener('click', () => {
      localStorage.removeItem('cart');
      cartCont.innerHTML = 'Корзина очищена';
      cartCont.style.fontWeight = 700;
      cartCont.style.marginTop = 40 + 'px';
      basketSum.innerHTML = '0 р.';
      modalCartTotalNum.innerHTML = '0 р.';
    });

    //hamburger

    var $button = $('#hamburger');
    menuItem  = document.querySelectorAll('.header__link');
    menu      = document.querySelector('.header__navigation');

    menuItem.forEach(item => { //clicking on the navigation link
      item.addEventListener('click', () => {
        menu.classList.toggle('header__navigation_active');
        $button.removeClass('open');
        $button.addClass('close');
        $('body').css({
          'overflow':'visible'
        });
        $('.header__overlay').removeClass('header__overlay_active');
      });
    });



});