function isIt10(num1, num2) {
    if (num1 === 10 || num2 === 10 || num1 + num2 === 10) {
        return true;
    } else {
        return false;
    }
}

console.log(isIt10(4, 6));