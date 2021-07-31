const slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    nav: false,
    controls: false
  });
  document.querySelector('.slider__next').addEventListener('click' , function () {
    slider.goTo('next');
  });
  document.querySelector('.slider__prev').addEventListener('click' , function () {
    slider.goTo('prev');
  });