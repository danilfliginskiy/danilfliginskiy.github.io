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

      //open modal card

      $('.carousel_catalog__item').each(function(i){
        $(this).on('click', function(){
          $('#animal .modal__stats-title-value').text($('.carousel_catalog__main-title').eq(i).text());
          $('#animal .modal__stats-descr-value').text($('.carousel_catalog__main-subtitle').eq(i).text());
          $('#animal .modal__stats-age-value').text($('.carousel_catalog__header-month .carousel_catalog__header-number').eq(i).text());
          $('#animal .modal__stats-reward-value').text($('.carousel_catalog__header-reward .carousel_catalog__header-number').eq(i).text());
          $('#animal .modal__stats-price-value').text($('.carousel_catalog__footer-price').eq(i).text());
          $('.overlay, #animal').fadeIn('slow');
          $('body').css({
            'overflow':'hidden'
          });
        });
      });

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

      //modal settings

      $('.modal__close').on('click', function(){
        $('.overlay, #acces, #thanks, #galleryPhoto').fadeOut('slow');
        $('body').css({
          'overflow':'visible'
        });
      });
  
      $('.overlay').on('click', function(event){

        const target = event.target;

        if ( target.closest('.modal') ) {} else {
          $('.overlay, #acces, #thanks, #galleryPhoto').fadeOut('slow');
          $('body').css({
            'overflow':'visible'
          });
        }
      });
  
      window.onkeydown = function(event) {
        if ( event.code == 'Escape' ) {
          $('.overlay, #acces, #thanks, #galleryPhoto').fadeOut('slow');
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



    //end JQUERY

   

});