
$(document).ready(function () {

	var stBoxImg = document.querySelector('.content2');
	var isTweenMax = true;
	
	$('.music').css('visibility', 'hidden');

	$(window).scroll(function (event) {
		var st = $(this).scrollTop();
		if (st >= (stBoxImg.offsetTop - 400) && isTweenMax) {
			$('.music').css('visibility', 'visible');
			TweenMax.staggerFrom($('.music'), 1, { y: 100, opacity: 0 }, 0.3);
			isTweenMax = false;
		}
	});
});