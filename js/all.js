"use strict";

// on screen animation
$(window).scroll(function () {
  $(".animate").each(function () {
    if ($(this).isOnScreen(0, 0.1) == true) {
      $(this).addClass("on");
    } else {
      $(this).removeClass("on");
    }
  });
}); //product details

$(function () {
  $(".point-item ,.info-item ").click(function () {
    var $this = $(this);

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".point-item ,.info-item ").removeClass("active");
      $this.addClass("active");
    }

    return false;
  });
});
$(".CLA-btn-try-btn").click(function () {
  var _go = $(this).attr("href");

  $("html,body").animate({
    scrollTop: $(_go).offset().top
  }, 2000);
});
//# sourceMappingURL=all.js.map
