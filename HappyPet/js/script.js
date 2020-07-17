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
      })
  
    });

    //end JQUERY

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
          
        });
      });

});