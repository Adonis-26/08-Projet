document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.carousel-indicators button');
  const prevButton = document.querySelector('.carousel-control-prev');
  const nextButton = document.querySelector('.carousel-control-next');

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      indicators[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  if (nextButton && prevButton && indicators.length > 0) {
    nextButton.addEventListener('click', () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    });

    prevButton.addEventListener('click', () => {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(prevIndex);
    });

    indicators.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        showSlide(index);
      });
    });

    
    setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    }, 5000);
  }

});
