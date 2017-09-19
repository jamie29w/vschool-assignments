//1. Write a function that takes an array of numbers and returns the largest

//var arr1 = [23, 543, 234, -654, 234];
//
//function biggestNum(arr) {
//    var lgNum = arr[0];
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i] > lgNum) {
//            lgNum = arr[i];
//        }
//    }
//    return lgNum;
//}
//console.log(biggestNum(arr1));

//2. Write a function that takes an array of words and a character and return an array of each word that has that letter present

//var arr2 = ["cat", "black", "nope", "fathom", "broken"];
//
//function letterPresent(arr, char) {
//    newArray = [];
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i].indexOf(char) !== -1) {
//            newArray.push(arr[i]);
//        }
//    } return newArray;
//}
//
//console.log(letterPresent(arr2, "a"));

//3. Write a function that takes a num1 and num2 and returns whether num1 is
//divisible by num2

//function dividesBy(num1, num2) {
//    if (num1 % num2 === 0) {
//        return(num1 + " is divisible by " + num2 + ".");
//    } else {
//        return (num1 + " is not divisible by " + num2 + ".")
//    }
//}
//
//console.log(dividesBy(4,2));


//4. Filter

//function filterWords(arr, char) {
//    var matches = arr.filter(function(item) {
//        return item.indexOf(char) !== -1;
//    });
//    return matches;
//}
//
//console.log(arr2);
//
//console.log(filterWords(arr2, "a"));