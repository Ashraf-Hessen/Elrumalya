$(document).ready(function () {
  "use strict";

  $(".loading").fadeOut();
  // Adjust Slider Height
  var winH = $(window).height(),
    navH = $(".navbar").innerHeight();
  $(".hero").height(winH - navH);

  $(".partners .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
        nav: false,
      },
      768: {
        items: 4,
        nav: false,
      },
      1000: {
        items: 6,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
      },
    },
  });

  $(".projects .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1.1,
        nav: false,
      },
      768: {
        items: 3.5,
        nav: false,
      },
      1000: {
        items: 4.3,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
      },
    },
  });
});
