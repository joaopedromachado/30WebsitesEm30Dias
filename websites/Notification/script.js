const container = document
                    .querySelector("#container")
const button = document
                    .querySelector("button")
const messages = [
    "Don't forget to drink water!",
    "I love 🐶!",
    "Follow me on Github 😃",
    "This is the #21 website!"
]

button.addEventListener("click", () => {

    createNotification()
});

function createNotification() {
    const ntf = document.createElement("div");
    ntf.classList.add("modal-ntf");

    ntf.innerText = randomMessage();

    container.appendChild(ntf)

    setTimeout(() => {
        ntf.remove() 
    }, 3000);

}

function randomMessage() {

    return messages[Math.floor(Math.random() * messages.length)]
}