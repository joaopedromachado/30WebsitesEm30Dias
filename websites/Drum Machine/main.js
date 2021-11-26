const keys = document.querySelectorAll(".key")
const keyQ = document.querySelector(".keyQ")
const keyW = document.querySelector(".keyW")
const keyE = document.querySelector(".keyE")
const keyA = document.querySelector(".keyA")
const keyS = document.querySelector(".keyS")
const keyD = document.querySelector(".keyD")
const keyZ = document.querySelector(".keyZ")
const keyX = document.querySelector(".keyX")
const keyC = document.querySelector(".keyC")

// Get the key codes
const Q = 113;
const W = 119;
const E = 101;
const A = 97;
const S = 115;
const D = 100;
const Z = 122;
const X = 120;
const C = 99;


document.addEventListener("keypress", event => {
    let key = event.keyCode;
    
    key == Q ? keyQ.classList.add("stl-keys") : false
    key == W ? keyW.classList.add("stl-keys") : false
    key == E ? keyE.classList.add("stl-keys") : false
    key == A ? keyA.classList.add("stl-keys") : false
    key == S ? keyS.classList.add("stl-keys") : false
    key == D ? keyD.classList.add("stl-keys") : false
    key == Z ? keyZ.classList.add("stl-keys") : false
    key == X ? keyX.classList.add("stl-keys") : false
    key == C ? keyC.classList.add("stl-keys") : false


    keys.forEach( evKey => {
        setTimeout(() => {
           evKey.classList.remove("stl-keys")
        }, 250);
    })
})
