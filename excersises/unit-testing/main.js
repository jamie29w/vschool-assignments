var assert = function (actual, expected) {
    if (actual !== expected) {
        throw {
            type: "Fail",
            details: {
                actual: actual,
                expected: expected
            }
        };
    } else {
        console.log("Success", {
            type: "Test passed",
            details: {
                actual: actual,
                expected: expected
            }
        });
    }
};

var describe = function(message, testFunc) {
    try {
        testFunc();
    } catch(err) {
        console.log("Failure", err);
    }
};

function add(num1, num2) {
    return num1 + num2;
};

describe("Test group", function() {
    assert(3, add(1, 2));
    assert(-5, add(-2, -3));
    assert(-1000, add(-200, -800));
});


function subtract(num1, num2) {
    return num1 - num2;
};

describe("Test group", function() {
    assert(-1, subtract(1, 2));
    assert(1, subtract(-2, -3));
    assert(600, subtract(-200, -800));
});

function multiply(num1, num2) {
    return num1 * num2;
}

describe("Test group", function() {
    assert(2, multiply(1, 2));
    assert(6, multiply(-2, -3));
    assert(160000, multiply(-200, -800));
});

function divide(num1, num2) {
    return num1 / num2;
};

describe("Test group", function() {
    assert(0.5, divide(1, 2));
    assert(2/3, divide(-2, -3));
    assert(1/4, divide(-200, -800));
});