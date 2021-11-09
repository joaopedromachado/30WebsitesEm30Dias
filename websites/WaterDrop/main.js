
function droplet() {
    const waterDrop = document.createElement("div") // Cria o elemento "div"

    waterDrop.classList.add("waterDrop") // Cria a class waterDrop dentro do elemento "Div"
    
    waterDrop.style.left = Math.random() * 100 + "vw" // waterDrop agora recebe um número aleatório até 100 em formato viewport width
    
    waterDrop.innerHTML = "&#128167;" // Adiciona o emoji dentro da Div

    document.body.appendChild(waterDrop) // Anexa o nosso elemento div com todas as propriedades dentro do body

    //Criando um timeout, podemos remover nosso elemento anexado, de acordo com o intervalo setado.
    setTimeout(() => {
        waterDrop.remove()
    }, 5000);
}

setInterval(droplet, 300) // Frequência que as gotas são geradas.