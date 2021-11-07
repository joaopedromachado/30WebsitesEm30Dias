var audio = document.querySelector("audio")

function play() {
    audio.play()
}

function pause() {
    audio.pause()

}

function stop() {
    audio.currentTime += 240;
}