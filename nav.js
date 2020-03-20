var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('.navigation');
var close = document.querySelector('.close-nav');

hamburger.addEventListener('click', function() 
{
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active'); 
  close.classList.toggle('close-nav--active');  
});

close.addEventListener('click', function() 
{
    hamburger.classList.remove('hamburger--active');
    nav.classList.remove('navigation--active');  
    close.classList.remove('close-nav--active'); 
});
