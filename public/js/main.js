$(document).ready(function() {

  let sidebarBreakpoint = window.matchMedia("(max-width: 992px)");
  const sidebarListener = () => adjustSidebar(sidebarBreakpoint);

  $('.dropdown-answers').click(function() {
    $(this).next('.answers').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  })

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

  $('.clients-row').slick({
    dots: false,
    arrows: false,
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
    arrows: false,
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

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1260 && window.innerWidth < 992) {
      bannerSlider.removeEventListener('transitionstart', handleSlickDots);
    }
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

  const bannerSlider = document.querySelector('.slick-track');

  const handleSlickDots = () => {
    if (window.innerWidth < 1260 && window.innerWidth > 992) {
      if ($('.slick-track .banner-item:nth-child(2)').hasClass('slick-active'))  {
        $('.slick-dots').animate({bottom: 20});
      }
      else {
        $('.slick-dots').animate({bottom: 100});
      }
    }
    else {
      $('.slick-dots').animate({bottom: 20});
    }
  }

  bannerSlider.addEventListener('transitionstart', handleSlickDots);

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

const form = document.getElementById('form');
const Name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const success = document.querySelector('.success');

form.addEventListener('submit', e => {
  if (!validateInputs()) {
    e.preventDefault();
  };
});

const setError = (element) => {
  element.classList.add('error');
  element.classList.remove('success')
}


const setSuccess = element => {
  element.classList.add('success');
  element.classList.remove('error');
};

const isValidEmail = email => {
  const re = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
  return re.test(String(email).toLowerCase());
}


const showError = (element) => {
  if (element.validity.valueMissing) {
    // If empty
    emailError.textContent = "";
  } else if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}

const validateInputs = () => {
  const NameVal = Name.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const messageVal = email.value.trim();

  var passed = true;

  if (NameVal === '') {
    setError(Name);
    passed = false;
  } else {
    setSuccess(Name);
  }

  if (phoneVal === '') {
    setError(phone);
    passed = false;
  } else {
    setSuccess(phone);
  }

  if (messageVal === '') {
    setError(message);
    passed = false;
  } else {
    setSuccess(message);
  }

  if (emailVal === '') {
    setError(email);
    passed = false;
  } else if (!isValidEmail(emailVal)) {
    setError(email);
    passed = false;
  } else {
    setSuccess(email);
  }

  return passed;
}