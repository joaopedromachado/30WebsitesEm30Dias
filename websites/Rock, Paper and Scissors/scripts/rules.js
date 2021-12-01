const button = document.getElementById("button");
const modal = document.querySelector(".rules-modal");
const close = document.getElementById("close")

button.addEventListener("click", () => {
    modal.classList.add("show-modal")
})

close.addEventListener("click", () => {
    modal.classList.remove("show-modal")
})