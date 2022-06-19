const sliderContainer = document.querySelector('.review__inner');
const constrolButtons = sliderContainer.querySelectorAll('.slider-controls__button');
const slider = sliderContainer.querySelector('.review__slides');
const slides = [...slider.children];
let sliderShift = 0;

constrolButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const direction = this.dataset.direction;
    moveSlide(direction);
  });
});

const moveSlide = (direction) => {
  sliderShift += direction === 'next' ? -100 : 100;
  slider.style.transform = `translateX(${sliderShift}%)`;
};

