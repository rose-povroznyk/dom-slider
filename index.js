'use strict';

const slides = [
  {
    src: 'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape1',
  },
  {
    src: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape2',
  },
  {
    src: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg',
    alt: 'landscape3',
  },
  {
    src: 'https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape4',
  },
];

const [prevBtn, nextBtn] = document.querySelectorAll('button');
const sliderImg = document.querySelector('.sliderWrapper img');

///////////////////Function Realisation
// let currentSlideIndex = 0;
// updateSlider(currentSlideIndex);

// prevBtn.onclick = prevBtnHandler;
// nextBtn.onclick = nextBtnHandler;

// function prevBtnHandler() {
//   //   if (currentSlideIndex === 0) {
//   //     currentSlideIndex = slides.length;
//   //   }
//   //   currentSlideIndex--;

//   currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
//   updateSlider(currentSlideIndex);
// }

// function nextBtnHandler() {
//   //   if (currentSlideIndex < slides.length - 1) {
//   //     currentSlideIndex++;
//   //   } else {
//   //     currentSlideIndex = 0;
//   //   }
//   currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//   updateSlider(currentSlideIndex);
// }

// function updateSlider(currentSlideIndex) {
//   sliderImg.src = slides[currentSlideIndex].src;
//   sliderImg.alt = slides[currentSlideIndex].alt;
//   sliderImg.onerror = () => {
//     sliderImg.src =
//       'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
//   };
// }

///////////////////////////////////Class Realisation
class Slider {
  constructor(slides, currentSlideIndex = 0) {
    this.slides = slides;
    this.currentSlideIndex = currentSlideIndex;
  }
  set currentSlideIndex(v) {
    if (typeof v !== 'number') {
      throw TypeError();
    }
    if (v < 0 || v >= this.slides.length || !Number.isInteger(v)) {
      throw RangeError();
    }
    this._currentSlideIndex = v;
  }
  get currentSlideIndex() {
    return this._currentSlideIndex;
  }
  incSlideIndex() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }
  decSlideIndex() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
  get currentSlide() {
    return this.slides[this._currentSlideIndex];
  }
}

try {
  const slider = new Slider(slides, 0);
  updateSlider(slider.currentSlide);

  prevBtn.onclick = prevBtnHandler;
  nextBtn.onclick = nextBtnHandler;

  function prevBtnHandler() {
    slider.decSlideIndex();
    updateSlider(slider.currentSlide);
  }

  function nextBtnHandler() {
    slider.incSlideIndex();
    updateSlider(slider.currentSlide);
  }

  function updateSlider(currentSlide) {
    sliderImg.src = currentSlide.src;
    sliderImg.alt = currentSlide.alt;
    sliderImg.onerror = () => {
      sliderImg.src =
        'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    };
  }
} catch (e) {
  sliderImg.src =
    'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
}
