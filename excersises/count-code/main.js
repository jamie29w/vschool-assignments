//Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.

function countCode (str) {
    var numOfCodes = 0; //variable counting instances of "co*e"
    for (var i = 0; i < str.length; i++) { //iterates through input string looking for "co*p"
        if (str[i] === "c" && str[i+1] === "o" && str[i+3] === "e") {
            numOfCodes++; // adds +1 to counting variable if the above statement is met
        } //for loop will keep doing the above process until we've gone through the entire string
    }
    return numOfCodes;
//    console.log(numOfCodes); //shows me the count after we go through the entire string - note this is inside the function, so it is automatically performed when the function is called
}

console.log(countCode("aaacodebbb"));
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcope"));
console.log(countCode("c3zexxc3pe"));


//PLAN
//establish counter var
//search string for "c"
//if c is found, is next letter o
//if o is found, is second letter e
//if yes, add 1 to counter var
//after reviewing entire string, return count var