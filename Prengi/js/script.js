window.addEventListener('DOMContentLoaded', () => {
  $(document).ready(function(){

    //sliders

      $('.carousel').slick({
        speed: 1000,
        slidesToShow: 1,
        waitForAnimate: false,
        dots: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: false
            }
          }
        ]
      });
      $('.carousel_solutions').slick({
        slidesToShow: 1,
        dots: true,
        infinite: true,
        waitForAnimate: false,
        speed: 1000,
        cssEase: 'linear',
        customPaging: function (carousel_solutions, i) {
          var title = $(carousel_solutions.$slides[i]).data('title');
          return '<span class="dots__item"><span class="dots__number">' + '</span>' + title + ' </span>';
        }
      });

    //hamburger button and header button

    $('.header__close').each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.header').eq(i).removeClass('header_active');
      });
    });


    var $button = $('#hamburger');
    menuItem  = document.querySelectorAll('.navigation__link');
    menu      = document.querySelector('.navigation__items');

    menuItem.forEach(item => { //clicking on the navigation link
      item.addEventListener('click', () => {
        menu.classList.toggle('navigation__items_active');
        $button.removeClass('open');
        $button.addClass('close');
        $('body').css({
          'overflow':'visible'
        });
      });
    });

    $button.on('click', function(e){
      e.preventDefault();
      if( $('.header').hasClass('header_active') ){
        $('.header').removeClass('header_active')
        if( $button.hasClass('open') ){
          $button.removeClass('open');
          $button.addClass('close');
          $('.navigation__items').toggleClass('navigation__items_active');
          $('body').css({
            'overflow':'visible'
          });
        } else {
          $button.removeClass('close');
          $button.addClass('open');
          $('.navigation__items').toggleClass('navigation__items_active');
          $('body').css({
            'overflow':'hidden'
          });
        }
      } else {
        if( $button.hasClass('open') ){
          $button.removeClass('open');
          $button.addClass('close');
          $('.navigation__items').toggleClass('navigation__items_active');
          $('body').css({
            'overflow':'visible'
          });
        } else {
          $('.overlay, #acces, #thanks').fadeOut('slow');
          $button.removeClass('close');
          $button.addClass('open');
          $('.navigation__items').toggleClass('navigation__items_active');
          $('body').css({
            'overflow':'hidden'
          });
        }
      }
    });

    $('.button_contacts').each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        if( $button.hasClass('open') ){
          $('.navigation__items').removeClass('navigation__items_active');
          $('.header').eq(i).addClass('header_active');
          $button.removeClass('open');
          $button.addClass('close');
          $('body').css({
            'overflow':'visible'
          });
        } else {
          $('.header').eq(i).toggleClass('header_active');
          $('.overlay, #acces, #thanks').fadeOut('slow');
          if( $('.header').hasClass('header_active') ) {
            $('body').css({
              'overflow':'hidden'
            });
          } else {
            $('body').css({
              'overflow':'visible'
            });
          }
        }
      });
    });

    $('.header__close').on('click', function(){
      $('body').css({
        'overflow':'visible'
      });
    });

    $('section, footer').on('click', function(){
      $('.header').removeClass('header_active');
      $('.navigation__items').removeClass('navigation__items_active');
      $button.removeClass('open');
      $button.addClass('close');
      if ($('[data-modal = acces]').hasClass('modal_active')) {
        $('body').css({
          'overflow':'hidden'
        });
      } else {
        $('body').css({
          'overflow':'visible'
        });
      }
    });

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

    //modal

    $('[data-modal = acces]').on('click', function(){
      $('.overlay, #acces').fadeIn('slow');
      $('[data-modal = acces]').addClass('modal_active');
      $('.navigation__items').removeClass('navigation__items_active');
      $('.header__items').removeClass('header__items_active');
      $('body').css({
        'overflow':'hidden'
      });
    });
  
    $('.modal__close').on('click', function(){
      $('.overlay, #acces, #thanks').fadeOut('slow');
      $('body').css({
        'overflow':'visible'
      });
    });

    $('.overlay').on('click', function(){
      $('.overlay, #acces, #thanks').fadeOut('slow');
      $('body').css({
        'overflow':'visible'
      });
    });

    window.onkeydown = function(event) {
      if ( event.code == 'Escape' ) {
        $('.overlay, #acces, #thanks').fadeOut('slow');
        $('body').css({
          'overflow':'visible'
        });
      }
    };
  
    //validate
  
    $('#modal-form').validate({
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
  
    //mask for phone
  
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    //remove animations for navigation__items on 768px

    var windowWidth = $(window).width();
    if(windowWidth < 992)$(".navigation__items").removeClass("fadeInRight");

  });



  //JQuery END



  //dynamic adaptiv

  (function () {
    let originalPositions = [];
    let daElements = document.querySelectorAll('[data-da]');
    let daElementsArray = [];
    let daMatchMedia = [];
    //Заполняем массивы
    if (daElements.length > 0) {
      let number = 0;
      for (let index = 0; index < daElements.length; index++) {
        const daElement = daElements[index];
        const daMove = daElement.getAttribute('data-da');
        if (daMove != '') {
          const daArray = daMove.split(',');
          const daPlace = daArray[1] ? daArray[1].trim() : 'last';
          const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
          const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
          const daDestination = document.querySelector('.' + daArray[0].trim())
          if (daArray.length > 0 && daDestination) {
            daElement.setAttribute('data-da-index', number);
            //Заполняем массив первоначальных позиций
            originalPositions[number] = {
              "parent": daElement.parentNode,
              "index": indexInParent(daElement)
            };
            //Заполняем массив элементов 
            daElementsArray[number] = {
              "element": daElement,
              "destination": document.querySelector('.' + daArray[0].trim()),
              "place": daPlace,
              "breakpoint": daBreakpoint,
              "type": daType
            }
            number++;
          }
        }
      }
      dynamicAdaptSort(daElementsArray);
  
      //Создаем события в точке брейкпоинта
      for (let index = 0; index < daElementsArray.length; index++) {
        const el = daElementsArray[index];
        const daBreakpoint = el.breakpoint;
        const daType = el.type;
  
        daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
        daMatchMedia[index].addListener(dynamicAdapt);
      }
    }
    //Основная функция
    function dynamicAdapt(e) {
      for (let index = 0; index < daElementsArray.length; index++) {
        const el = daElementsArray[index];
        const daElement = el.element;
        const daDestination = el.destination;
        const daPlace = el.place;
        const daBreakpoint = el.breakpoint;
        const daClassname = "_dynamic_adapt_" + daBreakpoint;
  
        if (daMatchMedia[index].matches) {
          //Перебрасываем элементы
          if (!daElement.classList.contains(daClassname)) {
            let actualIndex = indexOfElements(daDestination)[daPlace];
            if (daPlace === 'first') {
              actualIndex = indexOfElements(daDestination)[0];
            } else if (daPlace === 'last') {
              actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
            }
            daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
            daElement.classList.add(daClassname);
          }
        } else {
          //Возвращаем на место
          if (daElement.classList.contains(daClassname)) {
            dynamicAdaptBack(daElement);
            daElement.classList.remove(daClassname);
          }
        }
      }
      customAdapt();
    }
  
    //Вызов основной функции
    dynamicAdapt();
  
    //Функция возврата на место
    function dynamicAdaptBack(el) {
      const daIndex = el.getAttribute('data-da-index');
      const originalPlace = originalPositions[daIndex];
      const parentPlace = originalPlace['parent'];
      const indexPlace = originalPlace['index'];
      const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
      parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
    }
    //Функция получения индекса внутри родителя
    function indexInParent(el) {
      var children = Array.prototype.slice.call(el.parentNode.children);
      return children.indexOf(el);
    }
    //Функция получения массива индексов элементов внутри родителя 
    function indexOfElements(parent, back) {
      const children = parent.children;
      const childrenArray = [];
      for (let i = 0; i < children.length; i++) {
        const childrenElement = children[i];
        if (back) {
          childrenArray.push(i);
        } else {
          //Исключая перенесенный элемент
          if (childrenElement.getAttribute('data-da') == null) {
            childrenArray.push(i);
          }
        }
      }
      return childrenArray;
    }
    //Сортировка объекта
    function dynamicAdaptSort(arr) {
      arr.sort(function (a, b) {
        if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
      });
      arr.sort(function (a, b) {
        if (a.place > b.place) { return 1 } else { return -1 }
      });
    }
    //Дополнительные сценарии адаптации
    function customAdapt() {
      //const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
  }());
  
});