const previousOperation = document.querySelector(".result-content span");
const currentOperation = document.querySelector(".result-content h1");
const operators = document.querySelectorAll(".op");
const board = document.querySelectorAll(".num");
const equalsBtn = document.getElementById("data-equals");

board.forEach(key => {
    key.addEventListener("click", numberOperator)
});

function numberOperator(ev){
   currentOperation.innerHTML += ev.target.innerText;
}

operators.forEach(operator => {
    operator.addEventListener("click", (ev) => {
        let event = ev.target.innerText;
        if(event === "DEL"){
            currentOperation.innerText = currentOperation.innerText.slice(0, -1)
        }else if(event === "RESET"){
            clearAll();
        }
        else if(event === "+" || event === "-" || event === "/" || event === "x"){
           previousOperation.innerText = currentOperation.innerText + event
           currentOperation.innerText = "";
        }

    })
})

equalsBtn.addEventListener("click", processEqualOperator)

function processEqualOperator(){
    let x = parseFloat(previousOperation.innerText.slice(0, -1));
    let y = parseFloat(currentOperation.innerText);
    let op = previousOperation.innerText.slice(-1)
    if(op === "+"){
        currentOperation.innerText = sum(x,y)
    }else if(op === "-"){
        currentOperation.innerText = sub(x,y)
    }else if(op === "x"){
        currentOperation.innerText = mult(x,y)
    }else if(op === "/"){
        currentOperation.innerText = divi(x,y)
    }

    previousOperation.innerText = ""
};

function clearAll(){
    currentOperation.innerText = "";
    previousOperation.innerText = "";
}


const sum=(x,y)=>{
    return x+y;
};

const sub=(x,y)=>{
    return x-y;
};

const mult=(x,y)=>{
    return x*y;
};

const divi=(x,y)=>{
    return x/y;
};

