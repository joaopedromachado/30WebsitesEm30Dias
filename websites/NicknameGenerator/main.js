var nickname = ["João", "Marcos", "Pedro"];

var nicknameLength = nickname.length

var resultado = document.querySelector("#nickname_result");

function sortear() {
    return Math.round(Math.random());
}

function gerarNick() {
    var randomNickname = Math.round(Math.random() * nicknameLength)
    resultado.innerHTML = nickname[randomNickname];
}

function addNick(){
    var adicionarNome = prompt("Coloque um nome na lista");

    return nickname.push(adicionarNome);
}