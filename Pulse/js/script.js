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

  let content       = document.querySelector('.catalog-item__content'),
      list          = document.querySelector('.catalog-item__list'),
      firstTab      = document.querySelector('#catalog__tab_first'),
      secondTab     = document.querySelector('#catalog__tab_second'),
      thirtyTab     = document.querySelector('#catalog__tab_thirty'),
      firstContent  = document.querySelector('#catalog__content_first'),
      secondContent = document.querySelector('#catalog__content_second'),
      thirtyContent = document.querySelector('#catalog__content_thirty');

  document.querySelector('.catalog-item__link').addEventListener('click', function () {
    list.classList.add('catalog-item__list_active'),
    content.classList.remove('catalog-item__content_active');
  })

  document.querySelector('.catalog-item__back-link').addEventListener('click', function () {
    list.classList.remove('catalog-item__list_active'),
    content.classList.add('catalog-item__content_active');
  })

  document.querySelector('#catalog__tab_second').addEventListener('click', function () {
    firstTab.classList.remove('catalog__tab_active'),
    thirtyTab.classList.remove('catalog__tab_active'),
    secondTab.classList.add('catalog__tab_active'),
    firstContent.classList.remove('catalog__content_active'),
    thirtyContent.classList.remove('catalog__content_active'),
    secondContent.classList.add('catalog__content_active');
  })

  document.querySelector('#catalog__tab_thirty').addEventListener('click', function () {
    firstTab.classList.remove('catalog__tab_active'),
    secondTab.classList.remove('catalog__tab_active'),
    thirtyTab.classList.add('catalog__tab_active'),
    firstContent.classList.remove('catalog__content_active'),
    secondContent.classList.remove('catalog__content_active'),
    thirtyContent.classList.add('catalog__content_active');
  })

  document.querySelector('#catalog__tab_first').addEventListener('click', function () {
    secondTab.classList.remove('catalog__tab_active'),
    thirtyTab.classList.remove('catalog__tab_active'),
    firstTab.classList.add('catalog__tab_active'),
    secondContent.classList.remove('catalog__content_active'),
    thirtyContent.classList.remove('catalog__content_active'),
    firstContent.classList.add('catalog__content_active');
  })


  