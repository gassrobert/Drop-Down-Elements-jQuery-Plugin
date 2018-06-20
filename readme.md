# Drop Down Elements jQuery Plugin

The insertion of expandable content into pages beneath elements containing the elementForDropDown class. This plugin was made specifically for table rows, ordered lists and unordered lists and it supports only a limited number of tags in the settings. 

## Documentation

Apply the elementForDropDown class to the HTML elements in your page that you want a drop down row or list for. Supportable tags for the elementForDropDown class include:

1. h1, h2, h3, h4, h5
2. a
3. p
4. td
5. label

In order to change the default settings for the + and - icons and the drop down element, create a javascript file linked to that page and in this file call the droppedDownElement function and apply the settings that you want.

Below is a list of the settings for this plugin:

1. Icon Color
2. Drop Down Background Color
3. Drop Down Text Color
4. Drop Down Tag

Below is an example of how the plugin is called from within a JavaScript file.

	`$(".elementForDropDown").droppedDownElement({
		iconColor: "blue", 
		dropDownBgColor: "#483D8B", 
		dropDownColor: "#F8F8FF", 
		tag: '<tr>'
	});`

If no tag is specified the default of tr is used for the tag and the colors are reduced to plain black and white. 

Supportable elements for the tag setting include:
1. tr
2. td
3. ul
4. p
5. h1, h2, h3, h4, h5
6. a
7. label

## License
GPLv2 or later

## Creator
Robert Paul Gass