/* ---------------------------------------------------- +/

## Main ##

Global client-side code. Loads last.

/+ ---------------------------------------------------- */

//

Meteor.startup(function () {
  FastClick.attach(document.body);
  // document.body.addEventListener('touchmove', function(event) {
  //   if (!$(event.target).closest('.container')) {
  //     event.preventDefault();
  //   }
  // }, false);

	if (Modernizr.touch) {
		/* cache dom references */ 
		var $body = jQuery('body'); 

		/* bind events */
		$(document)
		.on('focus', 'input', function(e) {
		    $body.addClass('fixfixed');
		})
		.on('blur', 'input', function(e) {
		    $body.removeClass('fixfixed');
		});
	} 
});