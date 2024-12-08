const sound = document.getElementById('button-sound');
const buttons = document.querySelectorAll('.play-sound');

sound.volume = 0.3;
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    sound.pause(); 
    sound.currentTime = 0; 
    sound.play(); 
  });
});

const images = document.querySelectorAll('.project-image');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeBtn = document.querySelector('.close');

images.forEach(image => {
  image.addEventListener('click', (e) => {
    lightbox.style.display = 'flex';
    lightboxImage.src = e.target.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
  
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

const menuToggle = document.getElementById('menu-toggle'); 
const sideMenu = document.getElementById('side-menu'); 
const overlay = document.getElementById('overlay'); 
const menuLinks = document.querySelectorAll('.side-menu ul li a'); 

menuToggle.addEventListener('click', function () {
  sideMenu.style.left = '0'; 
  overlay.style.display = 'block'; 
});

overlay.addEventListener('click', function () {
  sideMenu.style.left = '-250px'; 
  overlay.style.display = 'none'; 
});

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    sideMenu.style.left = '-250px'; 
    overlay.style.display = 'none'; 
  });
});

