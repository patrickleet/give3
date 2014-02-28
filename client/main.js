/* ---------------------------------------------------- +/

## Main ##

Global client-side code. Loads last.

/+ ---------------------------------------------------- */

//

Meteor.startup(function () {
  FastClick.attach(document.body);
  document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
  }, false);
});