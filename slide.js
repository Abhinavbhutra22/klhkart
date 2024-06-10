const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showSlide(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
