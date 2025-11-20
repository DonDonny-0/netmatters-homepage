$(document).ready(function() {

  const sidebarBreakpoint = window.matchMedia("(max-width: 1025px)");

  // jquery for expand and collapse the sidebar
  $('#hamburger').on('click', function() {
    $('body').addClass('overflow-hidden');
    $('#open-sidebar').css('visibility', 'visible')

    sidebarBreakpoint.addEventListener('change', function() {
      adjustSidebar(sidebarBreakpoint);
    });

    if (window.innerWidth > 1025) {
      $('#container').animate({left: '-350px'});
    }
    else {
      $('#container').animate({left: '-275px'});
    }
    
    $('#container').addClass('active');
  });

  $('#open-sidebar').click(function () {
    sidebarBreakpoint.removeEventListener('change', adjustSidebar);
    $('#open-sidebar').css('visibility', 'hidden')
    $('#container').animate({left: '0'});
    $("#container").removeClass('active');
    $('body').removeClass('overflow-hidden');
  });

  let searchBtnClick = 0;

  $('#search-btn').click(() => {
    if (window.innerWidth < 1260 && window.innerWidth > 1025) {
      if (searchBtnClick % 2 == 0) {
        $('#contact-btn').css('display', 'none');
        $('#support-btn').css('display', 'none');
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

function adjustSidebar(x) {
  if (x.matches) {
    $('#container').animate({left: '-275px'});
  }
  else {
    $('#container').animate({left: '-350px'});
  }
}

let cookies = localStorage.getItem('cookiesConsent');

if (cookies === null) {
  $('.cookies').css('display', 'flex');
}
else {
  $('.cookies').css('display', 'none');
}

function accept() {
  localStorage.setItem('cookiesConsent', 'accepted');
  $(".cookies").css('display', 'none');
}

function showCookiePopup() {
  $(".cookies").css('display', 'flex');
}

