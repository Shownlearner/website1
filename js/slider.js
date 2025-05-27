const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const rightSide = document.querySelector('.right-slide');
const leftSide = document.querySelector('.left-slide');
const slideslength = rightSide.querySelectorAll('div').length;


upButton.addEventListener('click', () => { changeSlide('up'); } )
downButton.addEventListener('click', () => { changeSlide('down'); } )

function changeSlide(direction) {
    const topSlide = leftSide.querySelector('.top');
    const bottomSlide = leftSide.querySelector('.bottom');
    const rightSlide = rightSide.querySelector('.right');

    if (direction === 'up') {
        topSlide.classList.remove('top');
        topSlide.classList.add('bottom');
        bottomSlide.classList.remove('bottom');
        bottomSlide.classList.add('top');
        rightSide.appendChild(rightSlide);
    } else if (direction === 'down') {
        topSlide.classList.remove('top');
        topSlide.classList.add('bottom');
        bottomSlide.classList.remove('bottom');
        bottomSlide.classList.add('top');
        rightSide.prepend(rightSlide);
    }
}
