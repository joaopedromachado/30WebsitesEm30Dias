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
var updateImages = document.querySelectorAll(".selectors > div .circle")


let score = 0;
let userChoice = undefined;


selectors.forEach(selector => {
    selector.addEventListener("click", (ev) => {
        updateImages[0].classList.add(ev.target.getAttribute("data-choice"))
        userChoice = selector.getAttribute("data-choice")

        main.style.display = "none"
        displaySelectors.style.display = "flex"

        checkWinner();
    })
})


reset.addEventListener("click", () => {
    main.style.display = ""
    displaySelectors.style.display = "none"

    atualizarImagens();
    clearAll()
})

function checkWinner() {
    const computerChoice = pickRandomChoice();
    console.log(computerChoice)

    if (userChoice === computerChoice) {
        updateImages[1].classList.add(computerChoice)
        result.style.display = "";
        draw.style.display = "";
        win.style.display = "none";
        lose.style.display = "none";
    } else if (userChoice === "paper" && computerChoice === "rock" ||
        userChoice === "rock" && computerChoice === "scissors" ||
        userChoice === "scissors" && computerChoice === "paper") {
        updateImages[1].classList.add(computerChoice)
        result.style.display = "";
        win.style.display = "";
        lose.style.display = "none";
        draw.style.display = "none";
        updateScore(1)
        console.log("won")
    } else {
        updateImages[1].classList.add(computerChoice)
        updateScore(-1)
        result.style.display = "";
        draw.style.display = "none";
        win.style.display = "none";
        lose.style.display = "";
        console.log("lost")
    }
}

function clearAll(){
    result.style.display = "";
    lose.style.display = "";
    win.style.display = "none";
    draw.style.display = "none";
}

function atualizarImagens(){
    for(let i=0;i<choices.length;i++){
        for(let j=0;j<updateImages.length;j++){
            updateImages[j].classList.remove(choices[i])
        }
    }
}


function updateScore(value) {
    score += value

    scoreEl.innerText = score
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}
