function passCreate (num1) {
    var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@", "$", "%", "^", "&", "*", "<", ">"];
    var newPass = [];
    for (var i = 0; i < num1; i++) {
        newPass.push(alphaArray[Math.floor(Math.random() * 70)]);
    }
    return(newPass).join("");
}

console.log(passCreate(5));

//now I'll try to rebuild it - complete
//
function passCreate(num1) {
    var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@", "$", "%", "^", "&", "*", "<", ">"];
    newPass = [];
    for (i = 0; i < num1; i++) {
        newPass.push(alphaArray[Math.floor(Math.random() * 70)]);
    }
    return(newPass.join(""));
}

console.log(passCreate(10));

//alt: can you do it with a string? - complete

function passCreate (num2) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    alpha += alpha.toUpperCase();
    alpha += "0123456789";
    alpha += "!@#$%^&*()-=[]{}\|;:,<.>/?"
    var password = "";
    for (var i = 0; i < num2; i++) {
        password += alpha.charAt(Math.floor(Math.random() * alpha.length));
    }
    return password;
}

console.log(passCreate(14));