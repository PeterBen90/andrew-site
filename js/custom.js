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

// Download Form 1

$('#contact-form1').submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr('action'), $form.serialize()).then(function() {
    var file_path = 'images/OnePercentGuys_Pre-ListingOrientation.pdf';
    var a = document.createElement('A');
    a.href = file_path;
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});

// Download Form 2

$('#contact-form2').submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr('action'), $form.serialize()).then(function() {
    var file_path = 'images/OnePercentGuys_Pre-ListingOrientation.pdf';
    var a = document.createElement('A');
    a.href = file_path;
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});

// Download Form 3

$('#contact-form3').submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr('action'), $form.serialize()).then(function() {
    var file_path = 'images/OnePercentGuys_Pre-ListingOrientation.pdf';
    var a = document.createElement('A');
    a.href = file_path;
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});

// Download Form 4

$('#contact-form4').submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr('action'), $form.serialize()).then(function() {
    var file_path = 'images/OnePercentGuys_Pre-ListingOrientation.pdf';
    var a = document.createElement('A');
    a.href = file_path;
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});