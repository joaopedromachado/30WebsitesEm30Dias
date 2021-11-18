// Initial variables
const squares = document
                    .querySelectorAll(".squares");
const button = document
                    .querySelector("button")
const getInfo = document
                    .querySelector(".modal-container")
const colors = [
    "red", "blue", "green", "yellow", "pink", "orange", "red", "blue", "green", "purple", "orangered", "lightcoral", "salmon", "tomato", "crimson", "goldenrod", "gold", "limegreen", "lime", "darkcyan", "cyan", "mediumpurple", "darkviolet", "hotpink", "deeppink", "midnightblue", "teal", "lightseagreen", "turquoise", "darkolivegreen"
];

button.addEventListener("click", function handleClick(){
    getInfo.classList.add("modal-hidden");
});

squares.forEach(square => {
    square.addEventListener("mouseover", function(ev) {
        let element = ev.target;
        let changeColor = square.style.background = colors[pickColor()]
        element = changeColor
    })

    function pickColor() {
        var randomColors = Math.floor(Math.random() * colors.length)
    
        return randomColors
    }
})



