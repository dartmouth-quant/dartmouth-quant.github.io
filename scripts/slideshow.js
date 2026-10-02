const images = document.querySelectorAll('.slideshow-container .image');
const previousButton = document.querySelector('.slideshow-button-previous');
const nextButton = document.querySelector('.slideshow-button-next');
let currentIndex = 0;
const interval = 3000; // Change to desired delay in ms

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
    img.classList.toggle('inactive', i !== index);
  });
}

previousButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, interval);