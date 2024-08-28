const slider = document.querySelector('.slider');
const slides = slider.children;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

// Initialize the slider
slides[currentSlide].classList.add('active');

// Navigation event listeners
prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});

// Update the slider
function updateSlider() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[currentSlide].classList.add('active');
}