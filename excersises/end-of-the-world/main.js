var secondsTimer = document.getElementById("seconds");
var minutesTimer = document.getElementById("minutes");
var hoursTimer = document.getElementById("hours");
var timerBox = document.getElementById("timerBox")

var timeLeft = 5;


timerDisplay();

setInterval(timerDisplay, 1000);


function timerDisplay() {
    timeLeft--;
    
    if (timeLeft > 0) {
        var hours = Math.floor((timeLeft / 3600));
        var minsAfterHrs = Math.floor((timeLeft - (hours * 3600))/ 60);
        var minutes = Math.floor((minsAfterHrs % 60));
        var secsAfterMins = Math.floor(timeLeft - (minutes * 60) / 60);
        var seconds = Math.floor(secsAfterMins % 60);

        console.log(hours, minsAfterHrs, minutes, secsAfterMins, seconds);

        hoursTimer.innerHTML = hours;
        minutesTimer.innerHTML = minutes;
        secondsTimer.innerHTML = seconds;
    } else {
        clearInterval(setInterval);
        timerBox.innerHTML = "KA-BOOOOM!!";
//        explosions();
        };
    
};

function explosions() {
}