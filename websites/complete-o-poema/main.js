const words = document
                .querySelectorAll(".words span");
const dropzones = document
                .querySelectorAll(".poema-content span");


// function log(message) {
//     console.log("> " + message)
// }

words.forEach(word => {
    word.addEventListener("dragstart", dragStart)
    word.addEventListener("drag", drag)
    word.addEventListener("dragend", dragEnd)
})

function dragStart() {
    // log("CARD: Start dragging")
    dropzones.forEach(dropzone => dropzone.setAttribute("class", "highlight"))

    this.classList.add("is-dragging")
}

function drag() {
    // log("CARD: Is dragging")
}

function dragEnd() {
    // log("CARD: Stop drag")
    dropzones.forEach(dropzone => dropzone.classList.remove("highlight"))

    this.classList.remove("is-dragging")
}

// Local onde irá receber as imagens

dropzones.forEach(dropzone => {
    dropzone.addEventListener("dragenter", dragEnter)
    dropzone.addEventListener("dragover", dragOver)
    dropzone.addEventListener("dragleave", dragLeave)
    dropzone.addEventListener("drop", drop)
})

function dragEnter() {
    // log("DROPZONE: Enter in zone")
}

function dragOver() {
    // log("DROPZONE: Over")
    this.classList.add("dragover")

    const wordBeingDragged = document.querySelector(".is-dragging");

    this.appendChild(wordBeingDragged)
}

function dragLeave() {
    // log("DROPZONE: Leave")
    this.classList.remove("dragover")
}

function drop() {
    // log("DROPZONE: Dropped")
    this.classList.remove(".dragover")
}
