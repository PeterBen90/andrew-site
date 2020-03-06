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

// Form AJAX

$(function() {
  function after_form_submitted(data) {
    if (data.result == 'success') {
      $('form#reused_form').hide();
      $('#success_message').show();
      $('#error_message').hide();
    } else {
      $('#error_message').append('<ul></ul>');

      jQuery.each(data.errors, function(key, val) {
        $('#error_message ul').append('<li>' + key + ':' + val + '</li>');
      });
      $('#success_message').hide();
      $('#error_message').show();

      //reverse the response on the button
      $('button[type="button"]', $form).each(function() {
        $btn = $(this);
        label = $btn.prop('orig_label');
        if (label) {
          $btn.prop('type', 'submit');
          $btn.text(label);
          $btn.prop('orig_label', '');
        }
      });
    } //else
  }

  $('#reused_form').submit(function(e) {
    e.preventDefault();

    $form = $(this);
    //show some response on the button
    $('button[type="submit"]', $form).each(function() {
      $btn = $(this);
      $btn.prop('type', 'button');
      $btn.prop('orig_label', $btn.text());
      $btn.text('Sending ...');
    });

    $.ajax({
      type: 'POST',
      url: 'handler.php',
      data: $form.serialize(),
      success: after_form_submitted,
      dataType: 'json'
    });
  });
});
