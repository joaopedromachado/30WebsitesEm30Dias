const result = document.querySelector(".result")
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const draw = document.getElementById("draw");
const main = document.getElementById("main");
const displaySelectors = document.querySelector(".selectors")
const selectors = document.querySelectorAll(".picker")
const scoreEl = document.getElementById("scoreboard")
const choices = ["paper", "rock", "scissors"];
const reset = document.getElementById("button-play-again");

let score = 0;
let userChoice = undefined;


selectors.forEach(selector => {
    selector.addEventListener("click", () => {
        userChoice = selector.getAttribute("data-choice")

        main.style.display = "none"
        displaySelectors.style.display = "flex"

        checkWinner();
    })
})

reset.addEventListener("click", () => {
    main.style.display = ""
    displaySelectors.style.display = "none"
})

function checkWinner() {
    const computerChoice = pickRandomChoice();

    if (userChoice === computerChoice) {
        result.style.display = "";
        draw.style.display = "";
        lose.style.display = "none";
        win.style.display = "none";
    } else if (userChoice === "paper" && computerChoice === "rock" ||
        userChoice === "rock" && computerChoice === "scissors" ||
        userChoice === "scissors" && computerChoice === "paper") {
        updateScore(1)
        result.style.display = "";
        win.style.display = "";
        lose.style.display = "none";
        draw.style.display = "none";
        console.log("won")
    } else {
        updateScore(-1)
        result.style.display = "";
        lose.style.display = "";
        win.style.display = "none";
        draw.style.display = "none";
        console.log("lost")
    }
}


function updateScore(value) {
    score += value

    scoreEl.innerText = score
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}
