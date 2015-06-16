// NOVA JavaScript
// Author: shadowfacts
$(document).ready(function() {
	$('.nova-slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		autoplay: true,
		autplaySpeed: 8000,
		appendArrows: '.nova-slider-controls',
		prevArrow: '<a href="javascript:void(0)" class="left" role="button"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a>',
		nextArrow: '<a href="javascript:void(0)" class="right" role="button"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '80px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});
