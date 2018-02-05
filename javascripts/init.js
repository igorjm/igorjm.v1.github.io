(function() {

	skel.init({
		reset: 'full',
		breakpoints: {
			'global': { range: '*', href: 'stylesheets/style.css', viewport: { scalable: false } },
			'wide': { range: '-1680', href: 'stylesheets/style-wide.css' },
			'normal': { range: '-1280', href: 'stylesheets/style-normal.css' },
			'mobile': { range: '-736', href: 'stylesheets/style-mobile.css' },
			'mobilep': { range: '-480', href: 'stylesheets/style-mobilep.css' }
		}
	});

	// Events (JS).
		
		// Remove "loading" class once the page has fully loaded.
			window.onload = function() {
				document.body.className = '';
			}

		// Prevent scrolling on touch.
			window.ontouchmove = function() {
				return false;
			}

		// Fix scroll position on orientation change.
			window.onorientationchange = function() {
				document.body.scrollTop = 0;
			}

})();