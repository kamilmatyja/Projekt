var scrollButton = document.querySelector('#scrollup');
var scrollBackground = document.querySelector('.background-scrollup');

window.addEventListener('scroll', function() 
{
    if(window.scrollY > 150)
	{
	    scrollButton.classList.remove('un-visible');
        scrollButton.classList.add('is-visible');
		scrollBackground.classList.add('scrollup-visible');
		scrollBackground.classList.remove('scrollup-un-visible');
    } 
	else
	{
        scrollButton.classList.remove('is-visible');
	    scrollButton.classList.add('un-visible');
		scrollBackground.classList.remove('scrollup-visible');
		scrollBackground.classList.add('scrollup-un-visible');
    }    
});  

scrollButton.addEventListener('click', function() 
{
    if(window.scrollY != 0) 
	{
      setTimeout(function() 
	  {
        window.scrollTo(0, window.scrollY);
      }, 50000);
    }
});
