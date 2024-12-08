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
