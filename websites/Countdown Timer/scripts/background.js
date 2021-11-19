var colors = [
    "darkolivegreen", "darkblue", "darkcyan", "darkgoldenrod",
    "darkgreen", "darkkhaki", "darkorange", "darkmagenta",
    "darkred", "darkorchid"
];

function changeColor() {
    let randomColor = Math.floor(Math.random() * colors.length)
    document.body.style.background = colors[randomColor];
}