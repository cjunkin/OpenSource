$(document).ready(function(){
	// Navbar changes color when you scroll 
   $(window).scroll(function(){
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
   		
	// Navbar Redirect and Scrolling 
	if ($('body.is-home').length > 0) {

		// Scrolling

		$("#home-nav").click(function() {
	    	$('html, body').animate({scrollTop: $(".main-pic").position().top}, 650);
		});
		$("#about-us-nav").click(function() {
	    	$('html, body').unbind().animate({scrollTop: $('#about-us').offset().top - 28}, 650);
		});
		$("#projects-nav").click(function() {
		    $('html, body').unbind().animate({scrollTop: $('#project-box').offset().top - 0}, 650);
		});
		$("#contact-nav").click(function() {
		    $('html, body').animate({scrollTop: $("#contact").position().top - 40}, 650);
		});

		// Redirect

		$('#about-us-more').click(function() {
	   		window.location.href='https://docs.google.com/presentation/d/1YP8t1x-uY0AQk9Xtad_j2C6JiEsX-FJ5bvYuSMVNBIQ/edit?usp=sharing';
		});

	} else {
		$('#home-nav').click(function() {
   			window.location.href='/';
		});
		$('#about-us-nav').click(function() {
	   		window.location.href='/';
		});
		$('#projects-nav').click(function() {
	   		window.location.href='/';
		});
		$('#contact-nav').click(function() {
	   		window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSe4U1fDkjBbr7y-ynNHrlp5B8n6Ai7_XrlOg965Q3lifYUV1w/viewform?usp=sf_link';
		});
	}
	$('#apply-link').click(function() {
	   	window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSc-2SlPRjY6Fh6QzTlxo3xJcVIkfEkLQK4xkGGDiCLRrk_oow/viewform?usp=sf_link';
		});
	$('#lessons-nav').click(function() {
	   	window.location.href='./lessons.html';
		});

	// Footer Buttons

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

	// Dropdown

	var d = $('.lessons-drop-down')
	$('.dropdown-button').click(function() {
		$('.dropdown-button').css('transform', 'rotate(180deg)');
		if (d.hasClass('is-hidden')) {
		   	d.css('display', 'block').removeClass('is-hidden');
		   	$('.dropdown-button').css('transform', 'rotate(0deg)');
		} else {
		   	d.css('display', 'none').addClass('is-hidden');
		}
	});
	
	// Page Indicator

	if ($('#is-lessons').length > 0) {
		$('#lessons-nav').css('color', 'grey')
	}
	if ($('#is-contact').length > 0) {
		$('#contact-nav').css('color', 'grey')
	}

	// Main Image Effect

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		$(".main-pic").css('opacity', 1 - scroll/5500)
		$(".main-pic").css("background-size", (100 + scroll/70) + "%");
	});


	// $(window).scroll(function(){
 //  		var scroll = $(window).scrollTop();
	// 	$("#computer-pic, #main-desc-box, .main-pic").css({top: -19 -(scroll/25)  + "%"});
 //  		$("#main-desc-box").css({top: 31 -(scroll/25)  + "%"});
 //  		// $(".main-pic").css("box-shadow" , "inset -2px 0px 5px 2px black");	
 //  	});
});
