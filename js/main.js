$(document).ready(function(){ 
  
  var s = skrollr.init();
	
  /**********************************************
  MENU TOGGLE
  **********************************************/
  $(".menu").click(function() {
    $(this).toggleClass('open');
    $('.mobile-container').toggleClass('faded');
  });
  
  $('.menu').click(function() {
    $('.menu-container').toggleClass('appear');
  });
  

});