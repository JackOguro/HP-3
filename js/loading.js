$(document).ready(function () {
  const $slideShow = $('.slideShow');
  const $slide = $slideShow.children();
  const slideLen = $slide.length;
  $slideShow.slick({
    autoplay: true,
    autoplayspeed: 200,
    fade: true,
    cssEase: 'linear'
  })
    .on('afterChange', function () {
      const $self = $(this);
      if ((slideLen - 1) <= $self.slick('slickCurrentSlide')) {
        $self.slick('slickSetOption', 'autoplay', false);
      }
    });
});

