const panels = document.querySelectorAll('.panel')

//console.log("hello")
//console.log(panels) un comment if you want to see what they do

panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}
