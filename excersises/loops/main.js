//loop1
function loop1(input) {
  var arr = [];
    for (var i = 0; i < input.length; i++) {
      arr.push(input[i]);
    }
  return(arr).join(", ");  
}

console.log(loop1("blah"));

//loop2
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

//loop3
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

//loop4
var arrayY = [10, 27, 5, 6, -3, 200, 9, 14, 79, 82];

function loop4(arrayY) {
    var smallNum = [Infinity];
    for (var i = 0; i < smallNum; i++) {
        if (arrayY[i] < smallNum) {
            smallNum = arrayY[i]
        }
    }
    console.log(smallNum);
}

loop4(arrayY);