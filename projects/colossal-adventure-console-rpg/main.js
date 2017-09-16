var playerName = "";
var inventory = [];
var hpPlayer = (0);
var hpEnemy = (0);

function gameEntry() {
//    console.log("Hi fellow traveler. Are you sure you want to make this journey? If so, what's your name?");
    prompt("Hi fellow traveler. Are you sure you want to make this journey? If so, what's your name?", "playerName");
    (document.getElementById("playerName").innerHTML = playerName);
    return playerName;
};

gameEntry();

function gameBegin() {
    console.log("Well then, " + playerName + ", let's begin. When you're ready, please type w to walk.");
}

gameBegin();
