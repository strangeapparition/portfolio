function changeSection(filter) {
  $('#portfolio').find('.section.what[id!=section-' + filter + ']').fadeOut(300, function() {
    console.log('complete');
    $('#portfolio').find('.section.what[id=section-' + filter + ']').delay(300).fadeIn('slow');
  });
}

$(document).ready(function() {
  $(document).on('click', '.navbar li.filter', function() {
    $('.navbar li.active').removeClass('active');
    $(this).addClass('active');
    var filter = $(this).find('a').attr('id');
    changeSection(filter);
  });
});
