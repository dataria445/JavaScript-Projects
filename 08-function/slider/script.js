const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
   function updateButtons() {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === slides.length - 1;
  }

  function goToSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active', 'prev', 'next');
          
          if (i === index) {
              slide.classList.add('active');
          } else if (i < index) {
              slide.classList.add('prev');
          } else {
              slide.classList.add('next');
          }
      });
      
      currentIndex = index;
      updateButtons();
  }

  function nextSlide() {
      if (currentIndex < slides.length - 1) {
          goToSlide(currentIndex + 1);
      }
  }

  function prevSlide() {
      if (currentIndex > 0) {
          goToSlide(currentIndex - 1);
      }
  }

  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
          nextSlide();
      } else if (e.key === 'ArrowLeft') {
          prevSlide();
      }
  });

  // Initialize slider
  goToSlide(0);
});

Get all elements
