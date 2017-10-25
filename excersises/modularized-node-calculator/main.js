const add = require("./sumDiff").add;
const subtract = require("./sumDiff").subtract;
const exponentiate = require("./exponentiate");
const multiply = require("./multDiv").multiply;
const divide = require("./multDiv").divide;

function calculate(num1, num2, str) {
    // str.toLowerCase();
    switch (str) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return num1 * num2;
        case "divide":
            return divide(num1, num2);
        case "exponentiate":
            return exponentiate(num1, num2);
        default:
            return `please pass two numbers and one of the following: add, subtract, multiply, divide, exponentiate`;
    }
}

console.log(calculate(2, 3, "multiply"));
