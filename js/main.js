var setright = true;

$(document).ready(function() {
	
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
					
		} else {
						
		}
	});

	$('body').waypoint(function(direction) {
		if(direction == "down")
		{
			$('#header').addClass('fixed');
			$('.logo').append('<img src="images/logo_text.svg" style="height:42px" alt="">');
			$('#navigation').addClass('centre-nav-v');				
		}else
		{
			$('#header').removeClass('fixed');
			$('.logo').html("");
			$('#navigation').removeClass('centre-nav-v');
		}
	}, {
		offset: '-50px'
	});

	// slick carosel
	$('.slick').slick({		
		dots: true,
		arrows:false,
	    slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,  
	  	adaptiveHeight: false,
	  	autoplaySpeed: 5000	  	
  	});


	// Waypoints
	$('.work').waypoint(function() {
		$('.work').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});

	// enable sliding of services
	$('.services').waypoint(function() {		
		$('.services .right-slide').addClass('come-in-right');
	}, {
		offset: '95%'
	});

	// enable sliding of works
	$('.works').waypoint(function() {
		$('.works .left-slide').addClass('come-in-left');

	}, {
		offset: '95%'
	});

	// enable sliding of team
	$('.team').waypoint(function() {
		$('.team .right-slide').addClass('come-in-right');
	}, {
		offset: '95%'
	});

	// enable sliding of testimonials
	$('.testimonials').waypoint(function() {
		$('.testimonials .left-slide').addClass('come-in-left');
	}, {
		offset: '95%'
	});

	// enable sliding of contact form
	$('.contact').waypoint(function() {		
		$('.contact .right-slide').addClass('come-in-right');
	}, {
		offset: '95%'
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');
		logo = $('.logo');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 109
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 109
		}, 500);
	  return false;
	});

	logo.on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

	// type it
	$('.services-ti').typeIt({
     strings: 'Services',
     autoStart: false   
	});

	$('.works-ti').typeIt({
     strings: 'Works',
     autoStart: false
	});

	$('.test-ti').typeIt({
     strings: 'Feedback',
     autoStart: false
	});

	$('.team-ti').typeIt({
     strings: 'Team',
     autoStart: false
	});

	$('.contact-ti').typeIt({
     strings: 'Contact',
     autoStart: false
	});
	setColumnHeight();
	// resize container for headings
	$(window).on('resize', function(){
		setColumnHeight();
		resizeDiv();
	});


	if($(window).width() < 992)
	{
		$(".svg-col").removeClass('svg-col');
	}

});

// resize div
function resizeDiv() {
vpw = $(window).width();
vph = $(window).height();
$('.banner-logo').css({'height': vph + 'px'});
}

function setColumnHeight(){
	// right side doesn't need container heights when aligned to the top

	$(".services .midalign-parent").css('height',$(".services .col-md-10").height());
	//$(".works .midalign-parent").css('height',$(".works .col-md-10").height());
	$(".team .midalign-parent").css('height',$(".team .col-md-10").height());
	//$(".testimonials .midalign-parent").css('height',$(".testimonials .col-md-10").height());
	$(".contact .midalign-parent").css('height',$(".contact .col-md-10").height());


	// set paddings to centre in columns
	paddings();
}

function paddings(){
	var padding = ($(".services .col-md-2").outerWidth() - $(".services-ti").height()) / 2;
	var padding2 = $('.services .midalign-parent').innerWidth() - 25;	

	if (!setright) {
		setright = true;
		$('.works .midalign-parent').css('padding-left',padding +"px");
		$('.testimonials .midalign-parent').css('padding-left',padding +"px");		
	}
	$('.midalign-heading-left').css('left',padding2 +"px");	
	//$('.services .midalign-parent').css('padding-left',padding2 +"px");
	//$('.team .midalign-parent').css('padding-left',padding2 +"px");
	//$('.contact .midalign-parent').css('padding-left',padding2 +"px");


}