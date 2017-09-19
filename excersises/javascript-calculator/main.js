var readlineSync = require('readline-sync');

var num1 = parseInt(readlineSync.question("I'd like to do some math for you today. Can you please provide the first of two numbers?"));

var num2 = parseInt(readlineSync.question("And can I get the second number, please?"));

var funcWanted = readlineSync.question("Would you like me to add, subtract, multiply, or divide. Please reply with one of the following: add, sub, mul, or div.");

function mathFunc (str) {
    if (funcWanted === "add") {
            console.log(num1 + " + " + num2 + " equals " + (num1 + num2));
    } else if 
        (funcWanted === "sub") {
            console.log(num1 + " - " + num2 + " equals " + (num1 - num2))
    } else if
        (funcWanted === "mul") {
            console.log(num1 + " X " + num2 + " equals " + (num1 * num2))
    } else if
        (funcWanted === "div") {
            console.log(num1 + " / " + num2 + " equals " + (num1 / num2))    
    } else {
        console.log("Please respond with add, sub, mul, or div.")
    }
        
}

mathFunc(num1, num2);