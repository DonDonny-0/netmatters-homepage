$(document).ready(function() {

  // jquery for expand and collapse the sidebar
  $('#hamburger').click(function() {
    $('body').addClass('overflow-hidden');
    $('#open-sidebar').css('visibility', 'visible')
    if (window.innerWidth < 1025) {
      $('#container').animate({left: '-275px'});
      if ($('.sidebar').innerWidth === '350px') {
        $('#container').animate({left: '-350px'});
      }
    }
    else {
      $('#container').animate({left: '-350px'});
      if ($('.sidebar').innerWidth === '275px') {
        $('#container').animate({left: '-275px'});
      }
    }
    $('#container').addClass('active');
  });

  while ($('#container').hasClass('active')) {
    if ($('.sidebar').innerWidth === '350px') {
      $('#container').animate({left: '-350px'});
    }
    else {
      $('#container').animate({left: '-275px'});
    }
  }


  $('#open-sidebar').click(function () {
    $('#open-sidebar').css('visibility', 'hidden')
    $('#container').animate({left: '0'});
    $("#container").removeClass('active');
    $('body').removeClass('overflow-hidden');
  });


  $('.banner-carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  })

  const stickyHeader = document.querySelector('.sticky-header');

  var lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop && window.pageYOffset > 400) {
      $('.sticky-header').sticky();
    }
    else if (st > lastScrollTop) {
      $('.sticky-header').unstick();
    }
    lastScrollTop = st <= 0 ? 0 : st;
  });
});