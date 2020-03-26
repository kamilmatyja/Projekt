var slideIndex = 0;
carousel();

function carousel() 
{
  var sliderImage = document.getElementsByClassName("mySlides");
  
  for (var i = 0; i < sliderImage.length; i++) 
  {
    sliderImage[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > sliderImage.length) 
  {
	slideIndex = 1;
  }
  
  sliderImage[slideIndex-1].style.display = "block";
  setTimeout(carousel, 6000);
}