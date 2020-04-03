var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  })

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  })



var modalOverlay = document.querySelector("#overlay");
var closeButton = document.querySelector("#modalClose");
var openButton = document.querySelector("#modalOpen");

closeButton.addEventListener('click', function(){
    modalOverlay.classList.remove('active');
});

openButton.addEventListener('click', function(){
    modalOverlay.classList.add('active');
});

modalOverlay.addEventListener('click', function(){
  modalOverlay.classList.remove('active');
});