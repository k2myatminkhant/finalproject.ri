$(document).ready(function () {
  // Scroll Padding
  var navigationHeight = $(".navbar").outerHeight();
  $("html").css("--scroll-padding", navigationHeight - 1 + "px");

  // Back to Top Starts
  $(".btn-backtotops").hide();
  $(window).scroll(() => {
    let getScrollTop = $(this).scrollTop();

    if (getScrollTop >= 700) {
      $(".btn-backtotops").fadeIn(1000);
    } else {
      $(".btn-backtotops").fadeOut(1000);
    }
  });
  // Back to Ends Ends

  // Navbar Starts
  $(window).scroll(function () {
    let getScrollTop = $(this).scrollTop();
    // console.log(getScrollTop);

    if (getScrollTop >= 200) {
      $(".navbar").addClass("navmenus");
    } else {
      $(".navbar").removeClass("navmenus");
    }
  });

  $(".navbuttons").click(function () {
    $(this).toggleClass("crossxs");
  });
  // Navbar Ends
});
