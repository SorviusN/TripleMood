$(document).ready(function() {
  //navbar toggle
  $('#navbar-toggler').click(function(){
    $('.navbar-collapse').toggleClass('showNav');
  });
  // animated bar icon
  $('#navbar-toggler').click(function() {
    $(this).toggleClass('animatedNav');
  });
  // navbar background change w/ scroll, whenever you go below the top of the screen.
  $(window).scroll(function() {
    let position = $(window).scrollTop();
    if (position >= 60) {
      $('.navbar-wrapper').removeClass('container');
      $('navbar-wrapper').addClass('fxd-navbar-wrapper');
      console.log("Scrolling down");
    }
    else {
      console.log("Top of page");
      $('.navbar-wrapper').addClass('container');
      $('navbar-wrapper').removeClass('fxd-navbar-wrapper');
    }
  })
});
