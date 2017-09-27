function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function lastNums(num1, num2) {
    var lastDig1 = (Array.from(num1.toString())).pop();
    var lastDig2 = (Array.from(num2.toString())).pop();
    return (lastDig1 === lastDig2);
};


module.exports = {
    add: add,
    sub: subtract,
    mult: multiply,
    divi: divide,
    lastNums: lastNums
};