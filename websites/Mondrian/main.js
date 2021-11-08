
let cores;

const colors = document.querySelectorAll(".color");

colors.forEach((element) => {
    element.addEventListener("click", ev => {
        cores = ev.path[0].className.replace("color ", "");
    })
})

document.addEventListener("DOMContentLoaded", () => {
    var squares = document.querySelectorAll(".square");

    squares.forEach((item) => {
        item.addEventListener("click", handleClick)
    })
});

function handleClick(ev) {
    var element = ev.target
    
    element.style.background = cores
}



