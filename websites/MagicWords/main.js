// Meus spans collection
const spans = document
                .querySelectorAll(".words span");

// Adicionar a classe quando clicado, e remove a classe quando terminar a animação
spans.forEach((span, load) => {
    span.addEventListener("click", (ev) => {
        ev.target.classList.add("active");
    })
    span.addEventListener("animationend", (ev) => {
        ev.target.classList.remove("active");
    })

    // Iniciar animação quando a página for carregada
    setTimeout(() => {
        span.classList.add("active");
    }, 750 * (load+1));
});