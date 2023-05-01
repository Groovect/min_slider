'use strict'

const arrowUp = document.querySelector('.up-button'),
      arrowDown = document.querySelector('.down-button'),
      container = document.querySelector('.container'),
      sidebar = document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      slidesCount = mainSlide.querySelectorAll('div').length;
let   activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

arrowUp.addEventListener('click', () => {
  changeSlide('up');
});

arrowDown.addEventListener('click', () => {
  changeSlide('down');
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowUp') {
    changeSlide('up');
  } else if (e.code === 'ArrowDown') {
    changeSlide('down');
  }
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++;

    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }

  } else if (direction === 'down') {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}