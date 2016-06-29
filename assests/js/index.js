$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$('.back-to-top').hide();
window.onscroll = function() {checkOutTop()};
function checkOutTop() {
    if (document.body.scrollTop > 150) {
        $('.back-to-top').show();
    } else {
        $('.back-to-top').hide();
    }
}
