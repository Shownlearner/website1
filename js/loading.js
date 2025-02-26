const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load = load + 1
    if(load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}% `
    bg.style.filter =`blur(${50 - load/2}px)`
    loadText.style.opacity = `${1-load/100}`
}

