//Exercise 1
function twoNumbers(num1, num2) {
    return num1 + num2;
}

console.log(twoNumbers(1, 2));

//Exercise 2
var threeNumbers = function(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    }
    if (num2 > num1 && num2 > num3) {
        return num2;
    }
    if (num3 > num1 && num3 > num2) {
        return num3;
    }
}

console.log(threeNumbers(2, 6, 1));

//Exercise 3
function oddOrEven(num1) {
    if (num1 % 2 === 0) {
        return("even");
    } else
        return("odd");
}

console.log(oddOrEven(7));

//Exercise 4
var maxLengthString = function(string) {
    if (string.length <= 20) {
        return(string.concat(string));
    } else {
        var halfStringLength = (string.length / 2);
        for ( = 0; i < halfStringLength; i++) {
            return (string[i]);
        }
        return halfString;
    }
}

console.log(maxLengthString("twentytwentytwentytwentytwentytwenty"));

