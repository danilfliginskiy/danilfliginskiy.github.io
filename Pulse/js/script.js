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

// catalog

$(document).ready(function(){

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

});
