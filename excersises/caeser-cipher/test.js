var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var shift = parseInt(4);

function cipher(input) {
    var output = "";
    for (var i = 0; i < input.length; i++); {
        if (alpha.indexOf(input[i]) !== -1) {
            output += alpha[alpha.indexOf(input[i]) + shift];
        } else {
            output += input[i];
        }
    }
    return output;
};

console.log(cipher("blah"));
