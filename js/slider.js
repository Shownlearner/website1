const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const rightSide = document.querySelector('.right-slide');
const leftSide = document.querySelector('.left-slide');
const slideslength = rightSide.querySelectorAll('div').length;


upButton.addEventListener('click', () => {
    changeSlide('up');
}
);
downButton.addEventListener('click', () => {
    changeSlide('down');
}
);
