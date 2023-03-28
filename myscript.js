function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$("button").click(function() {
  $('html,body').animate({
      scrollTop: $(".second").offset().top},
      'slow');
});

$(window).on("scroll touchmove", function () {
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  var pos = $(document).scrollTop()
  var fade = 0.4
  fade = ((pos % vh) / vh)
  if ((pos % vh) < 500) {
    $('.transition').css('background-color', 'rgba(0, 0, 0,' + (0.4 + fade / 1.5) + ')')
  }
  else
    $('.transition').css('background-color', 'rgba(0, 0, 0,' + (1.3 - fade) + ')')
  if ($(document).scrollTop() >= $("#home").position().top && $(document).scrollTop() < ($("#resume").position().top) / 2) {
    $('body').css('background-image', 'url(img/background1.jpg)')
  };
  if ($(document).scrollTop() >= ($("#resume").position().top) ) {

    $('body').css('background-image', 'url(img/resume2.jpg)')
  };


});
