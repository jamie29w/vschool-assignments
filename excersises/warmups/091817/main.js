//antiCaps('Hello') // hELLO  
//antiCaps('racEcar') // RACeCAR  
//antiCaps('bAnAnA') // BaNaNa 

function antiCaps(str) {
    var newStr = "";
    var letter = str[i];
    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        if (letter === letter.toUpperCase()) {
            newStr += letter.toLowerCase();
        } else {
        newStr += letter.toUpperCase();
        };
    };
    return newStr;
};
    
//function isCaps(letter) {
//    return letter === letter.toUpperCase();
//}


console.log(antiCaps('Hello'));
console.log(antiCaps('racEcar'));
console.log(antiCaps('bAnAnA'));