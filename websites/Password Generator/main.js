// Iniciando Variáveis

const resultEl = document.getElementById("result-span");
const generateEl = document.getElementById("password-btn");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

generateEl.addEventListener("click", generatePassword)

function generatePassword() {

    resultEl.innerHTML = "Gerando uma senha..."
  
    setTimeout(() => {
        resultEl.innerHTML = ""
    }, 2000);

    generateUppercase()
    generateLowercase()
    generateNumbers()
    generateSymbols()
}


function generateUppercase() {
    console.log("Gerando letras grandes...")
}

function generateLowercase() {
    console.log("Gerando letras pequenas...")
}

function generateNumbers() {
    console.log("Gerando números...")
}

function generateSymbols() {
    const symbols = "!@#$%^&*(){}[]=<>/,."
    console.log("Gerando simbolos...")
}