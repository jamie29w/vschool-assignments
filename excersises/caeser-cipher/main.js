var readline = require('readline-sync');  

var input = readline.question("What phrase would you like to encrypt? ").toLowerCase();  
var shift = parseInt(readline.question("How many letters would you like to shift? "));  

var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function cipher(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        output += alpha[alpha.indexOf(input[i]) + shift];
    }
    console.log(output);
};

cipher(input);