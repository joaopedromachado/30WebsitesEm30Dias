const restart = document.getElementById("restart")
const card = document.querySelector(".card");
const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card"
const ICON = "icon"

startGame();

function startGame() {
    initializeCards(game.createCardsFromTechs());
}

function initializeCards(cards) {
    let gameBoard = document.querySelector(".game_board");
    gameBoard.innerHTML = "";
    game.cards.forEach(card => {
        let cardElement = document.createElement("div");
        cardElement.id = card.id;
        cardElement.classList.add(CARD)
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener("click", flipCard)
        gameBoard.appendChild(cardElement);
    })
}

function createCardContent(card, cardElement) {
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element) {
    let cardElementFace = document.createElement("div");
    cardElementFace.classList.add(face);
    if (face === FRONT) {
        let iconElement = document.createElement("img");
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);
    }else {
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace)
}

function flipCard() {
    if(game.setCard(this.id)) {
        this.classList.add("flip");
        if(game.secondCard){
            if(game.checkMatch()){
                game.clearCards();
            if(game.checkGameOver()){
                let gameOverLayer = document.querySelector(".gameOver");
                setTimeout(() => {
                    gameOverLayer.style.display = "flex";
                }, 500);
            }
            }else{
                setTimeout(() => {
                    let firstCardView = document.getElementById(game.firstCard.id);
                    let secondsCardView = document.getElementById(game.secondCard.id);
                
                    firstCardView.classList.remove("flip");
                    secondsCardView.classList.remove("flip");
                    game.unflipCards();
                }, 1000);
            }
        }
    }
}

restart.addEventListener("click", function restart(){
    game.clearCards();
    startGame();

    let gameOverLayer = document.querySelector(".gameOver");        
    gameOverLayer.style.display = "none";
})