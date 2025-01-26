let navbar = document.querySelector('.header-container');

let logo = document.querySelector('.logo');
let langswitcher = document.querySelector(".lang-switch")

let lastScrollTop = 0;
let timeout;
let scrollTimeoutDuration = 1500; // time in milliseconds
 


window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 0) {
    navbar.classList.add('hidden');
    langswitcher.classList.add("super-hidden");
    logo.classList.add("super-hidden");
  } 
  else if (currentScroll <=0){
    navbar.classList.remove('hidden');
    langswitcher.classList.remove("super-hidden");
    logo.classList.remove("super-hidden");
  }
  
  clearTimeout(timeout);
  navbar.classList.remove('hidden');

  timeout = setTimeout(function() {
    
    if (currentScroll > 0) {
      navbar.classList.add('hidden');
    }
  }, scrollTimeoutDuration);

  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

});
