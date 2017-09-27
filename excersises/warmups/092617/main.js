// Given a string, return true if the first instance of 'x' in the string is
// immediately followed by another 'x'.

function doubleX(str) { 
    var areTwoXs = false
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            if (str[i + 1] === "x") {
                areTwoXs = true;
            } else {
                break;
            }
        }
    } return areTwoXs;
}

console.log(doubleX("axxbb"));
console.log(doubleX("axxxb"));
console.log(doubleX("caskesx"));

//ALT (super elegant a la Kit) SOLUTION:
//function doubleX(str) {
//    var firstIndexOfX = str.indexOf("x");
//    var secondIndexOfX = firstIndexOfX + 1;
//    return str.charAt(secondIndexOfX) === "x";
//};