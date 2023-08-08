const locomotiveScroll = new LocomotiveScroll();

// Get a reference to the navigation bar element by its ID
const $navbar = document.getElementById('navbar');

// Get a reference to the SVG element by its ID
const $scrollArrow = document.getElementById('scrollArrow');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Show or hide the scroll arrow based on scroll position
  if (window.scrollY > 100) {
    // Adjust this value as needed
    $scrollArrow.style.display = 'block';
  } else {
    $scrollArrow.style.display = 'none';
  }
});

// Add a click event listener to the scroll arrow
$scrollArrow.addEventListener('click', () => {
  // Scroll to the navigation bar using Locomotive Scroll
  locomotiveScroll.scrollTo($navbar);
});
