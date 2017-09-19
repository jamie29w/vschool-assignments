answer = "yofasfas";

//function shortenAnswer(str) {
//    var halfLength = (str.length/2);
//    return str.substr(halfLength, str.length);
//};

function shortenAnswer(str) {
    var halfLength = (str.length/2);
    if (str.length > 20) {
        return str.substr(halfLength, str.length);
    } else {
        return str
    }
};

console.log(shortenAnswer(answer));