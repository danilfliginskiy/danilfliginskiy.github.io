window.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function(){
        $('.carousel').slick({
          speed: 1000,
          slidesToShow: 1,
          dots: true
        });
        $('.carousel_solutions').slick({
          slidesToShow: 1,
          dots: true,
          infinite: true,
          speed: 1000,
          cssEase: 'linear',
          customPaging: function (carousel_solutions, i) {
            var title = $(carousel_solutions.$slides[i]).data('title');
            return '<span class="dots__item"><span class="dots__number">' + '</span>' + title + ' </span>';
          }
        });
    });
});