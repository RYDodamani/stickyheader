// JavaScript is used here to add a class to the header when the user scrolls
window.addEventListener('scroll', function() {
  const header = document.querySelector('.sticky-header');
  const scrollY = window.scrollY;
  
  if (scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

