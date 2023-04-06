$(document).ready(function () {
  $(".collections-list.owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1.3,
        nav: false,
      },
      1000: {
        items: 2.3,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
      },
    },
  });

  $(".filter.owl-carousel").owlCarousel({
    loop: false,
    margin: 5,
    responsiveClass: true,
    dots: false,
    autoWidth: true,
    responsive: {
      0: {
        items: 4,
        nav: false,
      },
      678: {
        items: 6,
        nav: false,
      },
      1000: {
        items: 11,
        nav: false,
      },
    },
  });
  $(".images-list.owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 4,
        nav: false,
      },
    },
  });

  $(".amount .plus").click(function () {
    $(this)
      .siblings("input")
      .val(parseInt($(this).siblings("input").val()) + 1);
  });
  $(".amount .minus").click(function () {
    if ($(this).siblings("input").val() > 1) {
      $(this)
        .siblings("input")
        .val(parseInt($(this).siblings("input").val()) - 1);
    }
  });
  $(".product-details .main-image").height(
    $(".product-details .main-image").width()
  );
  $(".product-details .small-image").height(
    $(".product-details .small-image").width()
  );
  $(".product-details .small-image").click(function () {
    $(".product-details .main-image img").attr(
      "src",
      $(this).children("img").attr("src")
    );
  });
});
