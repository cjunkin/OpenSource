// jQuery
$(document).ready(function(){
	// Navbar page indicator
	if ($('#is-lessons').length > 0) {
		$('#lessons-nav').css('color', 'grey')
	}

	/* Navigation bar will change color after scrolling */
   $(window).scroll(function() {
  		var scroll = $(window).scrollTop();
	  	if (scroll > 0) {
	    	$(".navbar").css("background" , "#FFFFFF");
	    	$(".navbar").css("transition" , "0.2s");
	    	$(".navbar").css("box-shadow" , "0px 0px 2px 1px #9c9a9a");
	  	}
	  	else {
	  		$(".navbar").css("transition" , "box-shadow 0.03s, background 0.2s");
		 	$(".navbar").css("background" , "transparent");  
		 	$(".navbar").css("box-shadow" , "0px 0px 0px");	
	  	}
  	})

   	/* Increases homepage main image size and decreases its opacity when scrolling down */
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		$(".main-pic").css('opacity', 1 - scroll/5500)
		$(".main-pic").css("background-size", (100 + scroll/70) + "%");
	});
   		
	/* Navigation bar functions - 
	Scrolls to section on homepage if on homepage. 
	Goes back to homepage if not on homepage. */
	$("#home-nav").click(function() {
		if ($('#is-home').length > 0) {
			$('html, body').animate({scrollTop: $(".main-pic").position().top}, 650);
		} else {
			window.location.href='/';
		}
	});
	
	$("#about-us-nav").click(function() {
		if ($('#is-home').length > 0) {
			$('html, body').animate({scrollTop: $('#about-us').offset().top - 28}, 650);
		} else {
			window.location.href='/';
		}  
	});

	$("#projects-nav").click(function() {
		if ($('#is-home').length > 0) {
			$('html, body').animate({scrollTop: $('#project-box').offset().top - 0}, 650);
		} else {
			window.location.href='/';
		}
	});

	$("#contact-nav").click(function() {
		if ($('#is-home').length > 0) {
			$('html, body').animate({scrollTop: $("#contact").position().top - 40}, 650);
		} else {
			window.location.href='/';
		}
	});

	$('#about-us-more').click(function() {
   		window.location.href='https://docs.google.com/presentation/d/1YP8t1x-uY0AQk9Xtad_j2C6JiEsX-FJ5bvYuSMVNBIQ/edit?usp=sharing';
	});

	$('#apply-link').click(function() {
	   	window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSc-2SlPRjY6Fh6QzTlxo3xJcVIkfEkLQK4xkGGDiCLRrk_oow/viewform?usp=sf_link';
		});
	
	$('#lessons-nav').click(function() {
	   	window.location.href='lessons.html'; // "/lessons"
		});
	/* .htaccess checks if the specified directory exists and then rewrites the name 
		https://stackoverflow.com/questions/5730092/how-to-remove-html-from-url
		*/

	// Footer button functions
	$('#footer-about').click(function() {
	   	window.location.href='/';
		});
	$('#footer-project').click(function() {
	   	window.location.href='/';
		});
	$('#footer-team').click(function() {
	   	window.location.href='/';
		});
	$('#footer-apply').click(function() {
	   	window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSc-2SlPRjY6Fh6QzTlxo3xJcVIkfEkLQK4xkGGDiCLRrk_oow/viewform?usp=sf_link';
		});
	$('#footer-contact').click(function() {
	   	window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSe4U1fDkjBbr7y-ynNHrlp5B8n6Ai7_XrlOg965Q3lifYUV1w/viewform?usp=sf_link';
		});

	/* Unused - Hides or shows objects when a dropdown button is pressed */
	$('.dropdown-button').click(function() {
		var d = $('.lessons-drop-down')
		$('.dropdown-button').css('transform', 'rotate(180deg)');
		
		if (d.hasClass('is-hidden')) {
		   	d.css('display', 'block').removeClass('is-hidden');
		   	$('.dropdown-button').css('transform', 'rotate(0deg)');
		} else {
		   	d.css('display', 'none').addClass('is-hidden');
		}
	});
});
