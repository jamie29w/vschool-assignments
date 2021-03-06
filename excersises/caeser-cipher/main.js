var readline = require('readline-sync');
var input = readline.question("What phrase would you like to encrypt? ").toLowerCase();  
var shift = parseInt(readline.question("How many letters would you like to shift? "));
var alpha ="abcdefghijklmnopqrstuvwxyz"

function reduceInput(num1) {
    if (shift > 25 ) {
        shift = (shift % 26);
    } return shift;
};

function cipher(input) {
    reduceInput(shift);
    var output = "";
    for (var i = 0; i < input.length; i++) {
        if (alpha.indexOf(input[i]) === -1) {
            output += input[i];
        } else {
            output += alpha[alpha.indexOf(input[i]) + shift];
        }
    }
    console.log(output);
};

cipher(input);