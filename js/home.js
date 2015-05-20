(function($) {
  $(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }

    e.preventDefault();
    var pos = $(id).offset().top;
    $('body, html').animate({scrollTop: pos - 60});

    $('nav').removeClass('visible');
  });

  $(document).on('click', '#register-button', function(e) {
    alert("Registration for AtomHacks has closed.");
  });
})(jQuery);
