const card = document.querySelector(".card");

card.addEventListener("click", () => {
    card.classList.add("flip")

    setTimeout(() => {
        card.classList.remove("flip")
    }, 1000);
})

