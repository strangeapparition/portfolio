// function findViewportWidth() {
// 	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

// 	// if (w <= 767) {
// 	// 	$('.pull-right').removeClass('nav-stacked');
// 	// } else {
// 	// 	$('.nav-pills').addClass('nav-stacked');
// 	// }
// }

$(function() {
	// findViewportWidth();

	$(document).on('click', '.navbar li.filter', function() {
		$('.navbar li.active').removeClass('active');
		$(this).addClass('active');

		var filter = $(this).find('a').attr('id');
		// console.log(filter);

		if (filter === 'filter-all') {
			$('#portfolio').find('img[class^=filter-]').fadeIn();
		} else {
			$('#portfolio').find('img[class!=' + filter + ']').fadeOut();
			$('#portfolio').find('img[class=' + filter + ']').fadeIn();
		}
	});

	// window.onresize = function(event) {
	// 	findViewportWidth();
	// };
});