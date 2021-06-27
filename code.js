
function changeBg(){
    let boxes = document.querySelectorAll('.box')   
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let rgb = `rgb(${r} ,${g} ,${b} )`

    boxes.forEach(bx => {
        bx.style.backgroundColor = rgb
    })
}
setInterval(changeBg , 100)
