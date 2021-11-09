// Iniciando variáveis
let time = 3000;
let currentImageIndex = 0;
let imagesCollection = document.
            querySelectorAll("#slider_images img");
let maxImg = imagesCollection.length;

// Responsável pela atualização de imagem.
function nextImageShow() {
    // Ele remove a classe "selected" sempre que o time é atualizado
    imagesCollection[currentImageIndex]
                        .classList.remove("selected");
    // Todo elemento img com a classe "selected" é atualizado para a próxima img
    currentImageIndex++
    // Quando meu currentImageIndex atingir o número máximo, ele volta a ser 0
    if (currentImageIndex >= maxImg) {
        currentImageIndex = 0
    }
    // Adiciona classe "selected" para todas images
    imagesCollection[currentImageIndex]
                        .classList.add("selected");
}

// Executa o bloco com base na variável "time" declarada.
function startSlider() {
    setInterval(() => {
        nextImageShow()
    }, time);
};

// Toda vez que minha janela é atualizada, ele executa o meu bloco de função startSlider.
window.addEventListener("DOMContentLoaded", startSlider);