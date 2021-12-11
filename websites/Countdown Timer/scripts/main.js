// Initial variables
var daysEl = document.getElementById("days")
var hoursEl = document.getElementById("hours");
var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");

// Just set the date we are counting down to
var countDownDate = new Date("Feb 2, 2022 00:00:00").getTime()


// Updante the count down every 1 second
var start = setInterval(() => {

    // Randomize background color
    changeColor();

    // Get today's date and time 
    var nowDateCountDown = new Date().getTime();

    // Find the distance between nowDateCountDown and countDownDate
    var distance = countDownDate - nowDateCountDown;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000* 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000* 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Set the values inside HTML and show them
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    // Condition for input the "0" in front
    daysEl.innerHTML <= 9 ? daysEl.innerHTML = `0${days}` : false;
    hoursEl.innerHTML <= 9 ? hoursEl.innerHTML = `0${hours}` : false;
    minutesEl.innerHTML <= 9 ? minutesEl.innerHTML = `0${minutes}` : false;
    secondsEl.innerHTML <= 9 ? secondsEl.innerHTML = `0${seconds}` : false;

    // When the count down is done, Thats be executed
    if (distance <= 0) {
        clearInterval(start);
        window.alert("This project has been completed!")
    }
}, 1000);