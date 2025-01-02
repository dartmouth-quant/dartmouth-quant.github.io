const images = document.querySelectorAll('.slideshow-container .image');
let currentIndex = 0;
const interval = 3000; // Change to desired delay in ms

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
    img.classList.toggle('inactive', i !== index);
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, interval);