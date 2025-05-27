const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');
const slideslength = rightSide.querySelectorAll('div').length;

//First slide
let currentSlide = 1;
leftSide.style.top = `${-(slideslength - currentSlide) * 100}%`;

upButton.addEventListener('click', () => { changeSlide('up'); } )
downButton.addEventListener('click', () => { changeSlide('down'); } )

function changeSlide(direction) {
    const topSlide = leftSide.querySelector('.top');
    const bottomSlide = leftSide.querySelector('.bottom');
    const rightSlide = rightSide.querySelector('.right');

    if (direction === 'up') {
        if (currentSlide >= slideslength) {
            currentSlide = 1; // Reset to first slide
        }
        if (currentSlide <= 1) {
            currentSlide = slideslength; // Reset to last slide
        }

        currentSlide++;
        leftSide.style.top = `${-(slideslength - currentSlide) * 100}%`;
        rightSide.style.transform = `translateY(-${(currentSlide - 1) * 100}%)`;
    } else if (direction === 'down') {
        if (currentSlide >= slideslength) {
            currentSlide = 1; // Reset to first slide
        }
        if (currentSlide <= 1) {
            currentSlide = slideslength; // Reset to last slide
        }

        currentSlide--;
        leftSide.style.top = `${-(slideslength - currentSlide) * 100}%`;
        rightSide.style.transform = `translateY(-${(currentSlide - 1) * 100}%)`;
    }
}
