$(document).ready(function() {
  //navbar toggle
  $('#navbar-toggler').click(function(){
    $('.navbar-collapse').toggleClass('showNav');
  });
  // animated bar icon
  $('#navbar-toggler').click(function() {
    $(this).toggleClass('animatedNav');
  });
});
