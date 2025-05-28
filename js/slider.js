const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const rightSide = document.querySelector('.right-side')
const leftSide = document.querySelector('.left-side')
const slidesLength = rightSide.querySelectorAll('div').length

//First Slide
let currentSlide = 1 //slideLengt =4
leftSide.style.top = `${-(slidesLength - currentSlide)*100}%`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

function changeSlide(direction){
    if (direction === 'up'){
        currentSlide = (currentSlide % slidesLength) + 1;
    } else {
        currentSlide = (currentSlide - 1) || slidesLength;
    }

    leftSide.style.top = `${-(slidesLength - currentSlide) * 100}%`;
    rightSide.style.top = `${-(currentSlide - 1) * 100}%`;
}
