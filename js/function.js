function changeSection(filter) {
  $('#portfolio').find('.section.what[id!=section-' + filter + ']').fadeOut(300, function() {
    console.log('complete');
    $('#portfolio').find('.section.what[id=section-' + filter + ']').delay(300).fadeIn('slow');
  });
}

var lightboxOnResize = function() {
  if ($(window).width() < 767) {
    $('a.lightbox-link').removeAttr('data-lightbox');
  } else {
    $('a.lightbox-link').attr('data-lightbox', 'lightbox');
  }
};

// $(document).ready(lightboxOnResize);

$(document).ready(function() {
  lightboxOnResize();

  $(document).on('click', '.navbar li.filter', function() {
    $('.navbar li.active').removeClass('active');
    $(this).addClass('active');
    var filter = $(this).find('a').attr('id');
    // changeSection(filter);
  });
});

$(window).resize(function() {
  console.log('resize');
  lightboxOnResize();
});
