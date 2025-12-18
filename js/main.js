$(document).ready(function() {

  let sidebarBreakpoint = window.matchMedia("(max-width: 992px)");
  const sidebarListener = () => adjustSidebar(sidebarBreakpoint);

  function adjustSidebar() {
    if (sidebarBreakpoint.matches) {
      $('#container').css('left', '-275px');

      $('.sticky').css('right', '275px');
      $('.active').css('right', '275px');

      $('.sticky').css('left', '-275px');
      $('.active').css('left', '-275px');
    }
    else {
      $('#container').css('left', '-350px');

      $('.sticky').css('right', '350px');
      $('.active').css('right', '350px');

      $('.sticky').css('left', '-350px');
      $('.active').css('left', '-350px');
    }
  }

  // jquery for expand and collapse the sidebar
  $('.hamburger').on('click', function() {
    $('body').addClass('overflow-hidden');
    $('.hamburger').addClass('is-active');
    $('#open-sidebar').css('visibility', 'visible')

    sidebarBreakpoint.addEventListener('change', sidebarListener);

    if (window.innerWidth > 992) {
      $('#container').css('left', '-350px');

      $('.sticky').css('right', '350px');
      $('.active').css('right', '350px');

      $('.sticky').css('left', '-350px');
      $('.active').css('left', '-350px');
    }
    else {
      $('#container').css('left', '-275px');

      $('.sticky').css('right', '275px');
      $('.active').css('right', '275px');

      $('.sticky').css('left', '-275px');
      $('.active').css('left', '-275px');
    }
    
    $('#container').addClass('active');
  });

  $('#open-sidebar').on('click', function () {
    sidebarBreakpoint.removeEventListener('change', sidebarListener);
    $('#open-sidebar').css('visibility', 'hidden')
    $('#container').css('left', '0');
    $("#container").removeClass('active');
    $('body').removeClass('overflow-hidden');
    $('.hamburger').removeClass('is-active');

    $('.sticky').css('right', '0')
    $('.active').css('right', '0')

    $('.sticky').css('left', '0')
    $('.active').css('left', '0')
  });

  let searchBtnClick = 0;

  $('#search-btn').click(() => {
    if (window.innerWidth < 1260 && window.innerWidth > 1025) {
      if (searchBtnClick % 2 == 0) {
        $('#contact-btn').fadeOut().css('display', 'none');
        $('#support-btn').fadeOut().css('display', 'none');
        $('#search-box').css('display', 'inline-block');
      }
      else {
        $('#contact-btn').css('display', '');
        $('#support-btn').css('display', '');
        $('#search-box').css('display', '');
      }
      searchBtnClick += 1;
    }
  });

  $('.banner-carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  })

  // if ($('.low-dots').hasClass('slick-active')) {
  //   $('.slick-dots').css('bottom', '20px');
  // }
  // else if ($('.high-dots').hasClass('slick-active')){
  //   $('.slick-dots').css('bottom', '90px');
  // }

  $('.clients-row').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.partners-row').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  let lastScrollPos = 0;

  window.onscroll = () => {stickyHeader()}

  function stickyHeader() {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 300) {
      if (currentScrollPos < lastScrollPos) {
        $('.sticky').css('visibility', 'visible').stop(true).css('top', '0');
      }
      else {
        $('.sticky').stop(true).css('top', '-250px');
      }
    }
    else {
      if (currentScrollPos === 0) {
        $('.sticky').css('visibility', 'hidden');
      }
    }

    lastScrollPos = currentScrollPos;
  }

  if (window.innerWidth < 1260 && window.innerWidth > 1025) {
    if ($('.slick-dots li:first-child').hasClass('slick-active')) {
      $('.slick-dots').animate({bottom: "35px"});
      $('#move-up').animate({top: "50px"});
    }
    else {
      $('.slick-dots').animate({bottom: "0"});
    }
  }

});


let cookies = localStorage.getItem('cookiesConsent');

if (cookies === null) {
  $('.cookies').css('display', 'flex');
  $('body').addClass('overflow-hidden');
  
}
else {
  $('.cookies').css('display', 'none');
  $('body').removeClass('overflow-hidden');
}

function accept() {
  localStorage.setItem('cookiesConsent', 'accepted');
  $(".cookies").css('display', 'none');
  $('body').removeClass('overflow-hidden');
}

function showCookiePopup() {
  $(".cookies").css('display', 'flex');
}

