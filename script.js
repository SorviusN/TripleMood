$(document).ready(function() {
  //navbar toggle
  $('#navbar-toggler').click(function() {
    // "Toggling" the class "show nav" to the pre-existing class navbar-collapse.
    // This occurs when the navbar toggler is clicked, obviously.
    $('.navbar-collapse').toggleClass('.showNav');
  });
  // animated bar icon
  $('#navbar-toggler').click(function() {
    $(this).toggleClass('.animatedNav');
  });

  // navbar background change w/ scroll, whenever you go below the top of the screen.
  $(window).scroll(function() {
    var position = $(window).scrollTop();
    if (position >= 60) {
      //If position of the window (set as window.scrollTop()) is greater than 60 below the top, 
      $('.navbar-wrapper').removeClass('.container');
      $('.navbar-wrapper').addClass('.fxd-navbar-wrapper');
    }
    else {
      $('.navbar-wrapper').addClass('.container');
      $('.navbar-wrapper').removeClass('.fxd-navbar-wrapper');
    }
  })
});
