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



    //end JQUERY

   

});