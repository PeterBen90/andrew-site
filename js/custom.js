/*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

$(window).load(function() {
  $('.preloader').fadeOut(1000); // set duration in brackets
});

/* HTML document is loaded. DOM is ready. 
  -------------------------------------------*/

$(document).ready(function() {
  /*-------------------------------------------------------------------------------
    Navigation - Hide mobile menu after clicking on a link
  -------------------------------------------------------------------------------*/

  $('.navbar-collapse a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
      $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
      $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
  });

  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

  function initParallax() {
    $('#home').parallax('100%', 0.1);
    $('#about').parallax('100%', 0.3);
    $('#service').parallax('100%', 0.2);
    $('#experience').parallax('100%', 0.3);
    $('#education').parallax('100%', 0.1);
    $('#quotes').parallax('100%', 0.3);
    $('#contact').parallax('100%', 0.1);
    $('footer').parallax('100%', 0.2);
  }
  initParallax();

  /*-------------------------------------------------------------------------------
    smoothScroll js
  -------------------------------------------------------------------------------*/

  $(function() {
    $('.custom-navbar a, #home a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - 49
          },
          1000
        );
      event.preventDefault();
    });
  });

  /*-------------------------------------------------------------------------------
    wow js - Animation js
  -------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();
});

// FORM AJAX

$('#contactForm')
  .validator()
  .on('submit', function(event) {
    if (event.isDefaultPrevented()) {
      // handle the invalid form...
      formError();
      submitMSG(false, 'Did you fill in the form properly?');
    } else {
      // everything looks good!
      event.preventDefault();
      submitForm();
    }
  });

function submitForm() {
  // Initiate Variables With Form Content
  var name = $('#fullname').val();
  var email = $('#email').val();
  var message = $('#phone').val();

  $.ajax({
    type: 'POST',
    url: 'process.php',
    data: 'fullname=' + fullname + '&email=' + email + '&phone=' + phone,
    success: function(text) {
      if (text == 'success') {
        formSuccess();
      } else {
        formError();
        submitMSG(false, text);
      }
    }
  });
}

function formSuccess() {
  $('#contactForm')[0].reset();
  submitMSG(true, 'Message Submitted!');
}

function formError() {
  $('#contactForm')
    .removeClass()
    .addClass('shake animated')
    .one(
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
        $(this).removeClass();
      }
    );
}

function submitMSG(valid, msg) {
  if (valid) {
    var msgClasses = 'h3 text-center tada animated text-success';
  } else {
    var msgClasses = 'h3 text-center text-danger';
  }
  $('#msgSubmit')
    .removeClass()
    .addClass(msgClasses)
    .text(msg);
}
