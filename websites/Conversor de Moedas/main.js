
const currencyOfValue1 = document.querySelector("#currencyOfValue1")
const currencyOfValue2 = document.querySelector("#currencyOfValue2")
const inputEl = document.getElementById("number");
var result = document.getElementById("result")
const currencyType = {
    usd: 0.18,
    eur: 0.16,
}


inputEl.addEventListener("change", currency)

setInterval(currency, 100)

function currency() {

    let inputValue = inputEl.value
    let RealEmDolar =  inputValue * currencyType.usd
    let firstValue = currencyOfValue1.value
    let secondValue = currencyOfValue2.value

    // Convertendo Real em Dólar e Euro
    if (firstValue == "BRL" && secondValue == "USD") {
        RealEmDolar = RealEmDolar.toFixed(2).replace(".", ",")
        return result.innerText = `U$D ${RealEmDolar}`
    } 
    else if (firstValue == "BRL" && secondValue == "EUR") {
        let RealEmEuro = inputValue * currencyType.eur
        RealEmEuro = RealEmEuro.toFixed(2).replace(".", ",")
        return result.innerText = `€ ${RealEmEuro}`
    }

    // Convertendo Dólar em Real e Euro
    if (firstValue == "USD" && secondValue == "BRL") {
        let DolarEmReal = inputValue * 5.65
        DolarEmReal = DolarEmReal.toFixed(2).replace(".", ",")
        return result.innerText = `R$ ${DolarEmReal}`
    }
    else if (firstValue == "USD" && secondValue == "EUR") {
        let DolarEmEuro = inputValue * 0.88
        DolarEmEuro = DolarEmEuro.toFixed(2).replace(".", ",")
        return result.innerText = `€ ${DolarEmEuro}`
    }

    // Convertendo Euro em Real e Dólar
    if (firstValue == "EUR" && secondValue == "BRL") {
        let EuroEmReal = inputValue * 6.40
        EuroEmReal = EuroEmReal.toFixed(2).replace(".", ",")
        return result.innerText = `R$ ${EuroEmReal}`
    }
    else if (firstValue == "EUR" && secondValue == "USD") {
        let EuroEmDolar = inputValue * 1.13
        EuroEmDolar = EuroEmDolar.toFixed(2).replace(".", ",")
        return result.innerText = `U$D ${EuroEmDolar}`
    }

    let mesmoValor = inputValue * 1
    firstValue == "BRL" && secondValue == "BRL" ? result.innerText = `R$ ${mesmoValor}`: false
    firstValue == "USD" && secondValue == "USD" ? result.innerText = `U$D ${mesmoValor}`: false
    firstValue == "EUR" && secondValue == "EUR" ? result.innerText = `€ ${mesmoValor}`: false

    if (inputValue == "" || inputValue <= 0) {
        return result.innerText = "00,00"
    }
}