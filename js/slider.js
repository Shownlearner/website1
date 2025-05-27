const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');
const slidesLength = rightSide.querySelectorAll('div').length;

let currentSlide = 0;

upButton.addEventListener('click', () => { changeSlide('up'); });
downButton.addEventListener('click', () => { changeSlide('down'); });

function changeSlide(direction) {
    if (direction === 'up') {
        currentSlide++;
        if (currentSlide >= slidesLength) {
            currentSlide = 0;
        }
    } else if (direction === 'down') {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slidesLength - 1;
        }
    }
    rightSide.style.transform = `translateY(-${currentSlide * 100}%)`;
    leftSide.style.transform = `translateY(${currentSlide * 100}%)`;
}
