"use strict";

// this is how to use an IIFE with jQuery
// (function ($) {

$(document).ready(function() {
	// alert( 'The DOM has finished loading!' );
	
	// var contents = $('#main-header').html();
	//
	// alert(contents);
	
	// $('.codeup').css('border', 'solid 1px red');
	
	// $('li').css('font-size', '20px');
	//
	// $('h1, p, li').css('background-color', 'yellow');
	//
	// var header = $('h1').html();
	//
	// alert(header);
	
	$('h1').click(function () {
		$(this).css('background-color', 'cyan');
	})
	
	$('p').dblclick(function () {
		$(this).css('font-size', '18px');
	})
	
	$('li').hover(
		function () {
			$(this).css('color', 'red');
		},
		function () {
			$(this).css('color', 'black');
		}
	)
});

// })(jQuery);
