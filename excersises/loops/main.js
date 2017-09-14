//loop1 - Write a function that accepts a string as input. Write a loop to print out each letter of that string individually.
function loop1(input) {
  var arr = [];
    for (var i = 0; i < input.length; i++) {
      arr.push(input[i]);
    }
  return(arr).join(", ");  
}

console.log(loop1("blah"));

//loop2 - Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.
function loop2(input, z) {
  for (var i = 0; i < input.length; i++) {
    if (input.indexOf(z) === -1) {
      return(z + " is not in the string.");
    } else
    return(input.indexOf(z));
  }
}

console.log(loop2("angel", "z"));
console.log(loop2("angel", "g"));


//loop3 - Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found.
function loop3(arrayZ) {
    for (var i = 0; i < arrayZ.length; i++) {
      if (arrayZ.indexOf(42) === -1) {
      return("42 is not in the array.");
    } else
    return(arrayZ.indexOf(42));
  }
}

console.log(loop3([1,5,42]));
console.log(loop3([1,5,2]));

//loop4 - Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()
var arr = [10, 27, 5, 6, -3, 200, 9, 14, 79, 82];

function loop4(arr) {
    var smallNum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < smallNum) {
            smallNum = arr[i];
        }
    }
    console.log(smallNum);
}

loop4(arr);