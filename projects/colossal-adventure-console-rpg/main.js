var ask = require('readline-sync');

var isPlayerAlive = true;
var isDonePlaying = "n";
var inventory = [];
var hpPlayer = (0);
var hpEnemy = (0);


var playerName = ask.question("Hi fellow traveler. Are you sure you want to make this journey? If so, what's your name?");

var doesWalk = ask.question("It's good to meet you, " + playerName + ". My name is Roland. Around these parts, you'll want to type in w and then Enter to walk. Let's get moving. I'll walk with you.");

while (isPlayerAlive === true) {
    if (isPlayerAlive === false) {
        break
    }
    keepWalking();   
}

//END OF FOR LOOP


//DEFINE FUNCTIONS:

function keepWalking(input) {
    doesWalk = ask.question("Type w and Enter if you want to keep walking.");
    if (doesWalk !== "w") {
        isDonePlaying = ask.question("Are you done playing? Type y or n.");
    };
    if (isDonePlaying !== "n") {
        console.log("Enjoy your other travels " + playerName + "!");
        isPlayerAlive = false;
    };
    
//    doesEnemyAppear();
    
}

//HAVE DEBUGGED ABOVE HERE

function doesEnemyAppear() {
    if (Math.floor(Math.random()) * 4 === 1) {
        determineEnemy();
    }
}

function determineEnemy() {
    if (Math.floor(Math.random()) * 3 === 1) {
        goblinAttacks();
    } else if
        (Math.floor(Math.random()) * 3 === 2) {
        ogreAttacks();
    } else if
        (Math.floor(Math.random()) * 3 === 3) {
        sauronAttacks();
    }
}


function enemyAttacks() {
    
}