(function($) {
	$.fn.droppedDownElement = function(options) {

		// Obtain the default setttings to apply to elements.
		var settings = $.extend({
			iconColor: "#000000"
		}, options);

		return this.each(function() {

			// Prepend + icon to elements marked with a class of elementForDropDown
			$(this).prepend('<span class="drop-down-element dropdownelem-plus"></span>');

			// Apply settings color to + icon.
			$('.dropdownelem-plus').css('color', settings.iconColor);

		})
	}
}(jQuery));