/* The javascript that's specific to the Portfolio. This code is the "helper" code from the materializecss.com documentation */

	  var elem = document.querySelector('.sidenav');
  	  var instance = new M.Sidenav(elem);

$(document).ready(function(){
  	console.log("I got here");
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    console.log("Just Triggered the dropdown!")
 
});