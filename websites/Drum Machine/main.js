const keys = document.querySelectorAll(".key");


keys.forEach(key => {
    key.addEventListener("click", (ev) => {
        ev.target.classList.add("stl-keys")

        setTimeout(() => {
            key.classList.remove("stl-keys")
        }, 100);
    })
})