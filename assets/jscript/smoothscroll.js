$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});

var distancetocover = Math.abs($(document).scrollTop() - target.offset().top);
var timetoscroll = distancetocover / 7 + 250; 

// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll to a certain element
  document.querySelector('.hello').scrollIntoView({ 
    behavior: 'smooth' 
  });