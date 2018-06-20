(function($) {
	$.fn.droppedDownElement = function(options) {

		// Obtain the default setttings to apply to elements.
		var settings = $.extend({
			iconColor: "#000000", 
			tag: '<tr>'
		}, options);

		return this.each(function() {

			// Prepend + icon to elements marked with a class of elementForDropDown
			$(this).prepend('<span class="drop-down-element dropdownelem-plus"></span>');

			// Apply settings color to + icon.
			$('.dropdownelem-plus').css('color', settings.iconColor);

				// Check if it the element has a class of elementForDropDown
				if ( $( this ).hasClass( "elementForDropDown" ) ) {

						// Get the tag setting for the drop down element
						var preElemTag = settings.tag;

				} // End of if ( $( this ).hasClass( "elementForDropDown" ) ) {

			// If the user clicks on the icon or its parent, check if the icon is a + or a -
			$(this).on( "click", function(event) {

				// Get the full class of elements with the drop-down-element class
				var elemClass = $(this).find('.drop-down-element').attr("class");

				// Check if the icon area clicked is a + or a -
				if (elemClass == "drop-down-element dropdownelem-plus") {

					// Replace the + icon with a -
					$(this).find( "span.dropdownelem-plus" ).replaceWith( '<span class="drop-down-element dropdownelem-minus"></span>' );

					// Apply the color settings to the - icon
					$('.dropdownelem-minus').css('color', settings.iconColor);

				} else if (elemClass == "drop-down-element dropdownelem-minus") {

					// Replace the - icon with a +
					$(this).find( "span.dropdownelem-minus" ).replaceWith( '<span class="drop-down-element dropdownelem-plus"></span>' );

					// Apply the color settings to the + icon
					$('.dropdownelem-plus').css('color', settings.iconColor);

				}					


			}); // End of $(this).on( "click", function(event) {

		})
	}
}(jQuery));