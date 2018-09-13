jQuery(document).ready(function($) {
	$('#btnSubmit').click(() => {
		$('#sentAlert').show('fade');

		setTimeout(() => {
			$('#sentAlert').hide('fade');
		}, 3000);
	});

	$('#alertClose').click(() => {
		$('#sentAlert').hide('fade');
	});

	/*======= Skillset *=======*/

	$('.level-bar-inner').css('width', '0');

	$(window).on('load', function() {
		$('.level-bar-inner').each(function() {
			var itemWidth = $(this).data('level');
			$(this).animate({ width: itemWidth }, 800);
		});
	});

	$('.navbar-nav a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.on('click', function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length
					? target
					: $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate(
						{
							scrollTop: target.offset().top - 0
						},
						1000,
						function() {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(':focus')) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});
});
