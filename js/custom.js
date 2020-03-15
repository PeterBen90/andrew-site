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

(function($) {
  // Select the form and form message
  var form = $('#ajax-contact-form'),
    form_messages = $('#form-messages');

  // Action at on submit event
  $(form).on('submit', function(e) {
    e.preventDefault(); // Stop browser loading

    // Get form data
    var form_data = $(form).serialize();

    // Send Ajax Request
    var the_request = $.ajax({
      type: 'POST', // Request Type POST, GET, etc.
      url: 'contact.php',
      data: form_data
    });

    // At success
    the_request.done(function(data) {
      form_messages.text('Success: ' + data);

      // Do other things at success
    });

    // At error
    the_request.done(function() {
      form_messages.text('Error: ' + data);

      // Do other things at fails
    });
  });
})(jQuery);
