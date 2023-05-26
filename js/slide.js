// スライドショー
$('.slideShow').slick({
  responsive: [
    {
      breakpoint: 9999,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<div class="slick_prev"></div>',
        nextArrow: '<div class="slick_next"></div>',
      }
    },
  ]
});