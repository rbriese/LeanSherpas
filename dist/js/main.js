$(document).ready(function() {
  $(document).on('scroll', function() {
    if ($(this).scrollTop() > 0) {
      $('header').addClass('active');
      $('body').addClass('active');
    } else {
      $('header').removeClass('active');
      $('body').removeClass('active');
    }
  }).trigger('scroll');
});

$(document).ready(function() {
  $('.single-page-nav').singlePageNav();
});


function owlInitialize() {
   if ($(window).width() < 768) {
      $('.owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        touchDrag: true
      });
   }else{
      $('.owl-carousel').owlCarousel('destroy');
   }
}

$(document).ready(function(e) {
   owlInitialize();
});

$(window).resize(function() {
   owlInitialize();
});

//# sourceMappingURL=main.js.map
