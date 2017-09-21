var readline = require("readline-sync");  
var gameIsOn = true;
var hasTheKey = false;

var name = readline.question("What is your name? ");
    console.log("That doesn't matter anyway. You're locked in this room, and you're going to die if you don't get out.");

while (gameIsOn === true) {
    if (gameIsOn === false) {
        break
    }
    choices = ['Try the Door', 'Reach into the small, dark hole in the wall', 'Hopelessly search the room'];

    var action = parseInt(readline.keyInSelect(choices, "What do you want to do?") + 1);
    console.log(action);

    runAction(action);

    function runAction(num1) {
        if (num1 === 1 && hasTheKey === false) {
            console.log("The door is locked. What do you want to do now?\n");
        } else if
            (num1 === 1 && hasTheKey === true) {
            console.log("The door opens...you'll die another day.\n");
            return gameIsOn = false;
        } else if
            (num1 === 2) {
                var holeReach = (Math.floor(Math.random()* 100));
                if (holeReach < 20) {
                    console.log("Big yellow eyes are the last thing you see. You're dead.\n");
                } else if
                    (holeReach > 20 && holeReach < 40) {
                    console.log("You feel a hard smooth claw-like hand start pulling you closer to the wall. You know you're about to die.\n");
                } else if
                    (holeReach > 40 && holeReach < 60) {
                    console.log("You hear a grating voice: 'You'll float too. You'll live on forever with Robert Gray...\n");
                } else if
                    (holeReach > 60 && holeReach < 80) {
                    console.log("You thought there might be a key in here? So did the last person. You're dead.\n");
                } else {
                    console.log("Le sigh. You're dead.\n");
                    ;
                };
                return gameIsOn = false
        } else if
            (num1 === 3) {
                var search = (Math.floor(Math.random()* 100));
                if (search < 34) {
                    console.log("You found a key. What do you want to do now? What do you want to do now?\n")
                    return hasTheKey = true;
                } else if
                    (search > 34 && search < 47) {
                    console.log("You found a yellow-ish sock. What do you want to do now?\n")
                } else if
                    (search > 47 && search < 57) {
                    console.log("You found a skeleton. I think that used to be a mouse...What do you want to do now?\n")
                } else if
                    (search > 67 && search < 77) {
                    console.log("Let's just put that back...What do you want to do now?\n")
                } else {
                    console.log("You didn't find anything. What do you want to do now?\n")
                }
                
        } else if
            (num1 === 0) {
            console.log("Given up? You died a slow and hungry death.\n");
            return gameIsOn = false;
        }
    }
}