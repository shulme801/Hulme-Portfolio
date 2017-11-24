
	console.log("I got here");
	  var elem = document.querySelector('.sidenav');
  	  var instance = new M.Sidenav(elem);

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = new M.Collapsible(collapsibleElem);

  // Or with jQuery
$(document).ready(function(){
  
    $('.sidenav').sidenav();

 
});