
$(document).ready(function() {

  // jquery for expand and collapse the sidebar
  $('#hamburger').click(function() {
    $('#container').stop();
    $('#container').animate({left: '-350px'});
    $('#container').addClass('active');
  });

  // $('#container').click(function () {
  //   $('#container').animate({left: '0'});
  //   $("#container").removeClass('active');
  // });

  $('.banner-carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  })
});

const body = document.querySelector('body');
body.addEventListener('scroll', () => {
  $('header').animsition({
    inClass: 'fade-in-down-lg',
    inDuration: 500
  })
})