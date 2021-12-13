const keys = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".data-operator")
const reset = document.getElementById("data-reset");
const del = document.getElementById("data-del");
const equals = document.getElementById("data-equals")
var res = document.getElementById("result");

reset.addEventListener("click", resetCalc);
del.addEventListener("click", deleteLastData);
equals.addEventListener("click", calcEquals)

keys.forEach(key => {
    key.addEventListener("click", (ev) => {
        let number = Number(ev.target.value)
        res.innerHTML += number
        console.log(number)
    })
})
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        let op = operator.innerHTML
        res.innerHTML += op
        console.log(op)
    });
});


// Clear all
function resetCalc() {
    return res.innerText = ""
}

// Remove last insert data from display
function deleteLastData() {
    return res.innerText = res.innerText.slice(0, -1);
}

function calcEquals() {
   
}