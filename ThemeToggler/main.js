const checkbox = document.querySelector("#check");
const header = document.querySelector("header")
const link = document.querySelector("a")

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    header.classList.toggle("changeBackground");
    link.classList.toggle("changeColor");
})