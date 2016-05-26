// function findViewportWidth() {
// 	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

// 	// if (w <= 767) {
// 	// 	$('.pull-right').removeClass('nav-stacked');
// 	// } else {
// 	// 	$('.nav-pills').addClass('nav-stacked');
// 	// }
// }

$(document).ready(function() {
	checkUrl();
  $('#portfolio').find('.section.what[id!=section-filter-web]').fadeOut();

	$(document).on('click', '.navbar li.filter', function() {
		$('.navbar li.active').removeClass('active');
		$(this).addClass('active');
    checkUrl();
	});

	// window.onresize = function(event) {
	// 	findViewportWidth();
	// };
});

function checkUrl() {
  console.log('hash', window.location.hash);

  var filter = window.location.hash.replace('#', '');
  console.log('filter', filter);

  if (window.location.hash === '') {
    changeSection('filter-web');
  } else {
    changeSection(filter);
  }
}

function changeSection(filter) {
  $('#portfolio').find('.section.what[id!=section-' + filter + ']').fadeOut(300, function() {
    console.log('complete');
    $('#portfolio').find('.section.what[id=section-' + filter + ']').delay(300).fadeIn('slow');
  });
}