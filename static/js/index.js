window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
		slidesToScroll: 1,
		slidesToShow: 1,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
    }

	// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    // Tabs functionality for Build Your Security AI Agent section
    $('.build-tabs li').on('click', function() {
        var tabId = $(this).data('tab');
        
        // Remove active class from all tabs and panes
        $('.build-tabs li').removeClass('is-active');
        $('.tab-pane').removeClass('is-active');
        
        // Add active class to clicked tab and corresponding pane
        $(this).addClass('is-active');
        $('#' + tabId).addClass('is-active');
    });

})
