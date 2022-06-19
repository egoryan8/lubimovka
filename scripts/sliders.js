const sliderContainer = document.querySelector('.review__inner');
const constrolButtons = sliderContainer.querySelectorAll('.slider-controls__button');
const slider = sliderContainer.querySelector('.review__slides');
const slides = slider.children;
const [ prevBtn, nextBtn ] = constrolButtons; // убрать

const calculateShiftStep = () => slider.offsetWidth + (slider.scrollWidth - slides.length * slider.offsetWidth) / (slides.length - 1);

let shiftStep = calculateShiftStep();
let sliderShift = 0;
let currentSlide = 0;

const moveSlider = () => slider.style.transform = `translateX(${sliderShift}px)`;

const setSliderShift = (direction) => {
  if (direction === 'next') {
    sliderShift -= shiftStep;
    currentSlide += 1;
  }
  if (direction === 'prev') {
    sliderShift += shiftStep;
    currentSlide -= 1;
  }
  moveSlider();
};

const updateShiftParameters = () => {
  shiftStep = calculateShiftStep();
  sliderShift = currentSlide * (-shiftStep);
  moveSlider();
};

const checkEndPosition = () => {
  if (currentSlide === 0) {
    prevBtn.setAttribute('disabled', '');
  } else {
    prevBtn.removeAttribute('disabled');
  }
  if (currentSlide === slides.length - 1) {
    nextBtn.setAttribute('disabled', '');
  } else {
    nextBtn.removeAttribute('disabled');
  }
};

const highlightActiveSlide = () => {
  const activeSlide = slides[currentSlide];
  const prevSlide = slider.querySelector('.review__slide_active');
  activeSlide.classList.add('review__slide_active');
  prevSlide.classList.remove('review__slide_active');
};

constrolButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const direction = this.dataset.direction;
    setSliderShift(direction);
    checkEndPosition();
    highlightActiveSlide();
  });
});

window.addEventListener('resize', updateShiftParameters);
checkEndPosition();
