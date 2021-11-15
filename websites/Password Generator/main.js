// Iniciando Variáveis

const resultEl = document.getElementById("result-span");
const generateEl = document.getElementById("password-btn");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

// Retorno de cada função é guardada em chaves.
const randomFunc = {
    upper: generateUppercase,
    lower: generateLowercase,
    number: generateNumbers,
    symbol: generateSymbols
};

// Me confirma o estado dos botões, caso for false, mostra somente os true (checked)
generateEl.addEventListener("click", () => {
    const length = lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    
    resultEl.innerHTML = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
});


function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = "";
    const typesCount = upper + lower + number + symbol;
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return "";
    }

    for(let i = 0; i < length; i += typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}


// Me retorna o valor aleatório de cada valor exigido.

function generateUppercase() {
    const uppercaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"].join("");
    return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
}

function generateLowercase() {
    const lowercaseLetters = ["abcdefghijklmnopqrstuvwxyz"].join("");
    return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
}

function generateNumbers() {
    const numbers = Math.floor(Math.random() * 10);
    return numbers
}

function generateSymbols() {
    const symbols = ["!@#$%^&*(){}[]=<>/,."].join("");
    return symbols[Math.floor(Math.random() * symbols.length)];
}