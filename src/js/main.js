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

$('.menu-js').on('click', function() {
  $('.inner ul').toggleClass('active')
})

$(document).ready(function() {
  $('.single-page-nav').singlePageNav();

  $('#carousel2').owlCarousel({
    items: 1,
    dots: true,
    touchDrag: true
  });

  checkCookieOnLoad();
});



function owlInitialize() {
   if ($(window).width() < 768) {
      $('#carousel1').owlCarousel({
        items: 1,
        dots: true,
        touchDrag: true
      });
   }else{
      $('#carousel1').owlCarousel('destroy');
   }
}

$(document).ready(function(e) {
   owlInitialize();
});

$(window).resize(function() {
   owlInitialize();
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function checkCookieOnLoad() {
   if(getCookie("clicklink") === "yes") {
      $('.legal-terms').removeClass('active');
   } else {
      $('.legal-terms').addClass('active');
   }
}

$('.ok-button').on('click', function() {
  setCookie('clicklink', 'yes', 1);
  checkCookieOnLoad();
});
