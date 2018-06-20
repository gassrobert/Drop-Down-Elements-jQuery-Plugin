(function($) {
	$.fn.droppedDownElement = function(options) {

		// Obtain the default setttings to apply to elements.
		var settings = $.extend({
			iconColor: "#000000", 
			dropDownBgColor: "#FFFFFF", 
			dropDownColor: "#000000", 
			tag: '<tr>'
		}, options);

		return this.each(function() {

			// Prepend + icon to elements marked with a class of elementForDropDown
			$(this).prepend('<span class="drop-down-element dropdownelem-plus"></span>');

			// Apply settings color to + icon.
			$('.dropdownelem-plus').css('color', settings.iconColor);

				// Check if it the element has a class of elementForDropDown
				if ( $( this ).hasClass( "elementForDropDown" ) ) {

						// Obtain the text from the data-ddetext attribute
						if ($(this).data("ddetext") != undefined) {
							var dropDownElemText = $(this).data("ddetext");
						} else {
							var dropDownElemText = "&nbsp;";
						}

						// Get the tag setting for the drop down element
						var preElemTag = settings.tag;

						// Set up closing element tag
						if (preElemTag.indexOf(' ') >= 0) {
							// get string from between < and empty space
							var preElemTagArray = preElemTag.split(' ');
							preElemTagBegin = preElemTagArray[0];

								var closingElemTag = preElemTagBegin.substr(0, 1) + "/" + preElemTagBegin.substr(1) + ">";
							
						} else {
							// get string from between < and >
							var preElemTagArray = preElemTag.split(' ');
							preElemTagBegin = preElemTagArray[0];

							var closingElemTag = preElemTag.substr(0, 1) + "/" + preElemTag.substr(1);
							
						}

							// Find if the element tag is part of a table or not
							if (closingElemTag == "</tr>") {
 
 								// Get the tag of the element that contains the icon
								var elemTagName = $(this).closest('.elementForDropDown').prop('tagName');
								var row = $(this).closest('tr');
								var table = $(this).closest('table');

								// Check the tag of the element that contains the icon
								if (elemTagName == 'TD') {

									// Get the closest row
									var oneRowTD = $('td', $(this).closest('tr')).length;

									// Get style attribute setttings values for the drop down
									var ddBackgroundColor =  " background-color: " + settings.dropDownBgColor + ";";
									var ddColor =  " color: " + settings.dropDownColor + ";";

									// Set display: none in variables for the drop down	
									var preElemTagIndex = preElemTag.lastIndexOf(">");
									preElemTag = preElemTag.substr(0, preElemTagIndex) + ' style="display: none;' + ddBackgroundColor + ddColor + '"' + preElemTag.substr(preElemTagIndex);

								  	var dropDownElemTextTag = preElemTag +'<td colspan="'+ oneRowTD +'">'+ dropDownElemText +'</td>'+ closingElemTag;

								  	// Insert the drop down after the row
									$(dropDownElemTextTag).insertAfter(row);

								} else if (elemTagName == 'TR') {

									// tags that can't contain text shouldn't be given the elementForDropDown class since the icon needs to be inserted into something
									alert("Drop Down Elements need to be placed in tags that can contain content. This means the class shouldn't be put into <form>, <table> or <tr> tags.");

								} else if (elemTagName == 'TABLE') {

									// tags that can't contain text shouldn't be given the elementForDropDown class since the icon needs to be inserted into something
									alert("Drop Down Elements need to be placed in tags that can contain content. This means the class shouldn't be put into <form>, <table> or <tr> tags.");

								} else {

									// Get style attribute setttings values for the drop down
									var ddBackgroundColor= " background-color: " + settings.dropDownBgColor + ";";
									var ddColor =  " color: " + settings.dropDownColor + ";";

									// Set display: none in variables for the drop down
									var dropDownElemTextTag = '<table style="display: none;' + ddBackgroundColor + ddColor + '">'+preElemTag +'<td>'+ dropDownElemText +'</td>'+ closingElemTag+'</table>';

									// Insert the drop down after the element containing the icon
									$(dropDownElemTextTag).insertAfter(this);
								}										

							} else {
								
								// Get the tag of the element that contains the icon
								var elemTagName = $(this).closest('.elementForDropDown').prop('tagName');

								// Get style attribute setttings values for the drop down
								var ddBackgroundColor= " background-color: " + settings.dropDownBgColor + ";";
								var ddColor =  " color: " + settings.dropDownColor + ";";

								// Check the tag of the element that contains the icon
								if (elemTagName == 'TR') {

									// tags that can't contain text shouldn't be given the elementForDropDown class since the icon needs to be inserted into something
									alert("Drop Down Elements need to be placed in tags that can contain content. This means the class shouldn't be put into <form>, <table> or <tr> tags.");

								} else if (elemTagName == 'TABLE') {

									// tags that can't contain text shouldn't be given the elementForDropDown class since the icon needs to be inserted into something
									alert("Drop Down Elements need to be placed in tags that can contain content. This means the class shouldn't be put into <form>, <table> or <tr> tags.");

								} 

								// Set display: none in variables for the drop down	
								var preElemTagIndex = preElemTag.lastIndexOf(">");
								preElemTag = preElemTag.substr(0, preElemTagIndex) + ' style="display: none;' + ddBackgroundColor + ddColor +  '"' + preElemTag.substr(preElemTagIndex);

								var dropDownElemTextTag = preElemTag + dropDownElemText + closingElemTag;

								// Insert the drop down after the element containing the icon
								$(dropDownElemTextTag).insertAfter(this);
							}						

						

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