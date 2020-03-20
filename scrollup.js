var scrollButton = document.querySelector('#scrollup');

window.addEventListener('scroll', function() 
{
    if(window.scrollY > 150)
	{
	    scrollButton.classList.remove('un-visible');
        scrollButton.classList.add('is-visible');
    } 
	else
	{
        scrollButton.classList.remove('is-visible');
	    scrollButton.classList.add('un-visible');
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
