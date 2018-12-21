$(document).ready(function(){

	$('.slider').slick({
		slidesToShow: 1,
		arrows:false,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		centerMode: true,
 		focusOnSelect: true,
 		dots:true,
 		/*responsive: [
	    {
	      breakpoint: 480,
			settings: "unslick"
		}]*/
	});

});
