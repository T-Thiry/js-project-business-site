const hamburgerMenuIcon = document.querySelector('.hamburger-menu-icon');

const offScreenMenu = document.querySelector('.off-screen-menu');


hamburgerMenuIcon.addEventListener('click', () => {
  hamburgerMenuIcon.classList.toggle('active');
  offScreenMenu.classList.toggle('active');


  // Toggle scroll prevention
  if (offScreenMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden'; // Disable scroll
  } else {
    document.body.style.overflow = ''; // Enable scroll
  }
});