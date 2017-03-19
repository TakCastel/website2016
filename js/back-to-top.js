$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
});