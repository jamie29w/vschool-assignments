//Make one of the inputs all uppercase (i.e., given the string “hello” prints “HELLO”)
//Report back the number of characters in a given input
//Concatenate (add) two separate strings together
//Given a long message (more than twenty letters), return only the last half of the message
//Using the same long message (but without making the user type it in again), have your program print it to the terminal for the user to read again, but allow the user to tell your program where to begin typing from (i.e., which index to start from).

var readlineSync = require('readline-sync');

//1
var name = readlineSync.question("Hello traveler, would you tell me your name? ");
console.log("Well, hello then " + name.toUpperCase() + ". ");

var age = parseInt(readlineSync.question("May I ask how long you've been walking this earth? "));
console.log("Funny...I've been around for " + age + " years myself." );

//2
var purposeHere = readlineSync.question("Got you a story to share, " + name + "? ");
console.log("I see you don't like talkin' much. Your answers aren't that long. Only " + purposeHere.length + " characters to spare me?")

//3
var nameAge = name.concat(", " + age);
console.log(nameAge + ", and not much else you want to say. Alright, " + name + " I'll let you keep your business to yourself. But the rest of them around here might not ask so nicely...");

//4
var purposeAgain = readlineSync.question("Care to try again? ");
console.log(shortenAnswer(purposeAgain) + " That's fair enough.");

function shortenAnswer(str) {
    var halfLength = (str.length/2);
    if (str.length > 20) {
        return str.substr(halfLength, str.length);
    } else {
        return str
    }
};

//5
var repeat = readlineSync.question("Say that again. Where should I start...index what? ");
console.log(purposeAgain.substring(repeat, purposeAgain.length));