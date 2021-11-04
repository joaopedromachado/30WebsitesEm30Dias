
var blue = document.querySelector(".blue").style.backgroundColor = "#3c4681";
var yellow = document.querySelector(".yellow").style.backgroundColor = "#fcd202";
var red = document.querySelector(".red").style.backgroundColor = "#d42627";
var white = document.querySelector(".white").style.backgroundColor = "#f0f8ff";


document.addEventListener("DOMContentLoaded", () => {
    var squares = document.querySelectorAll(".square");

    squares.forEach((item) => {
        item.addEventListener("click", handleClick)
    })
});

function handleClick(ev) {
    var element = ev.target;
    var position = element.id

    console.log(ev.target)
}

