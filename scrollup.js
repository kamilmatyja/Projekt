
var basicScrollTop = function () 
{  
  var btnTop = document.querySelector('#scrollup');

  var btnReveal = function () 
  { 
    if (window.scrollY >= 150) {
      btnTop.classList.add('is-visible');
    } else {
      btnTop.classList.remove('is-visible');
    }    
  }  

  var TopscrollTo = function () 
  {
    if(window.scrollY!=0) {
      setTimeout(function() {
        window.scrollTo(0,window.scrollY-0);
        TopscrollTo();
      }, 50000);
    }
  }

  window.addEventListener('scroll', btnReveal);
  btnTop.addEventListener('click', TopscrollTo);  
};
basicScrollTop();



