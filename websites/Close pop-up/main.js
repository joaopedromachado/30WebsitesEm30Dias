const modal = document
                .querySelector(" .container-modal")

const removeAll = document
                .querySelector(" .container-button ")

const closeModal = document
                .querySelector(".container-modal span")

const blueScreen = document
                .querySelector(" .container-modal i ")



function myModal() {
    modal.classList.add("show-modal")

}

closeModal.addEventListener("click", handleClick);

function handleClick() {
    modal.classList.remove("show-modal")
}

blueScreen.addEventListener("click", addScreen)

 
function addScreen() {
    modal.classList.remove("show-modal")
    removeAll.classList.add("remove-container-button")
    document.body.classList.add("show-blueScreen")
}