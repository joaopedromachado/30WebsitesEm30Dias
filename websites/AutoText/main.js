// Initial variables
const text = document.getElementById("text");
const phrase = "30 WEBSITES IN 30 DAYS! #17";
var timer = 200;
var speed = 1;

// Initial call
writeText();

function writeText() {
// That will be received the phrase
    text.innerHTML = phrase.slice(0, speed);

// That will be wrote phrase on screen.
    setTimeout(() => {
        speed++;
        writeText()
    }, timer);

// When my const phrase is completed, that will be executed.
    if (text.innerHTML === phrase) {
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }
}
