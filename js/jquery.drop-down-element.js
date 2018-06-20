(function($) {
	$.fn.droppedDownElement = function() {

		return this.each(function() {

			// Prepend + icon to elements marked with a class of elementForDropDown
			$(this).prepend('<span class="drop-down-element dropdownelem-plus"></span>');

		})
	}
}(jQuery));