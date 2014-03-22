(function () {
	var $window = $(window);
	var velocity = 0.8;
	
	// Parallax
	$window.scroll(function (){
	    var pos = $window.scrollTop();
	    $('.container').each(function() {

	        var $element = $(this);
	        var height = $element.height();

	        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');

	    });
	});

	// Set active nav
	$window.scroll(function () {
	    var windscroll = $window.scrollTop();

	    $('.container').each(function (i) {

	        var posTop = $(this).position().top;
	        var h = $(this).height();

	        console.log(i+' | '+posTop+' pos-less:'+windscroll+' | pos+h:more'+(posTop+h));

	        if (posTop - 1 <= windscroll && posTop + h > windscroll) {
	            $('.nav-item').removeClass('nav-active');
	            $('.nav-item').eq(i).addClass('nav-active');
	        }

	    });
	}).trigger('scroll');

	// Stick nav
	$window.scroll(function () {

    	if ($window.scrollTop() > 160) {
        	$('.header').css('top', $window.scrollTop());
    	}

	});

    // Animate scrolling
	$('.nav li a').click(function (e) { 

	    e.preventDefault();
	    var goTo = $(this).attr('href');
	    $("html,body").animate({ scrollTop: $(goTo).offset().top }, 2000);  

    });

}());