const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');
const slideslength = rightSide.querySelectorAll('div').length;

leftSide.style.top = `${-(slideslength - 1) * 100}%`;

upButton.addEventListener('click', () => { changeSlide('up'); } )
downButton.addEventListener('click', () => { changeSlide('down'); } )

function changeSlide(direction) {
    const topSlide = leftSide.querySelector('.top');
    const bottomSlide = leftSide.querySelector('.bottom');
    const rightSlide = rightSide.querySelector('.right');

    if (direction === 'up') {
        leftSide.style.top = `${parseInt(leftSide.style.top) + 100}%`;
    } else if (direction === 'down') {
        leftSide.style.top = `${parseInt(leftSide.style.top) - 100}%`;
    }
}
