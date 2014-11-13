$(function(){
    $('#nav').click(function() {
        $(this).toggleClass('open');
    });
});

//Smooth Scrolling//
function scrollNav() {
  $('#nav a').click(function(){
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 84
    }, 666);
    return false;
  });
}
scrollNav();
