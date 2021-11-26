// Get the audio musics
const bd_md = document.getElementById("bd_md")
const bd_ryth = document.getElementById("bd_ryth")
const conga = document.getElementById("conga")
const cow = document.getElementById("cow")
const hh = document.getElementById("hh")
const hho = document.getElementById("hho")
const perc = document.getElementById("perc")
const sd_ryth = document.getElementById("sd_ryth")
const tom_ryth = document.getElementById("tom_ryth")
// Get the html keys
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

    if (key == Q) {
        keyQ.classList.add("stl-keys")
        bd_md.play()
    }
    if (key == W) {
        bd_ryth.play()
        keyW.classList.add("stl-keys")
    }
    if (key == E) {
        conga.play()
        keyE.classList.add("stl-keys")
    }
    if (key == A) {
        cow.play()
        keyA.classList.add("stl-keys")
    }
    if (key == S) {
        hh.play()
        keyS.classList.add("stl-keys")
    }
    if (key == D) {
        hho.play()
        keyD.classList.add("stl-keys")
    }
    if (key == Z) {
        perc.play()
        keyZ.classList.add("stl-keys")
    }
    if (key == X) {
        sd_ryth.play()
        keyX.classList.add("stl-keys")
    }
    if (key == C) {
        tom_ryth.play()
        keyC.classList.add("stl-keys")
    }
   

    keys.forEach( evKey => {
        setTimeout(() => {
           evKey.classList.remove("stl-keys")
           
        }, 500);
    })
})
