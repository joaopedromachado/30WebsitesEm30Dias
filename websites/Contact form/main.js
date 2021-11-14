const myContainer = document.querySelector(" .contact-container ");
const span = document.querySelector(" #button ")

span.addEventListener("click", (ev) => {
    ev.preventDefault();
    myContainer.innerHTML = "<p> Thanks for your message. I'll get back to you soon. 😃</p>"
    setTimeout(() => {
        window.location.reload()
    }, 3000);
})
