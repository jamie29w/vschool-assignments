//Given a multi-dimensional array containing only primitive data types (strings, booleans, and numbers), write a function that returns whether EACH element within each subarray belongs to the same data type.

let multiD = [[1,2,3],["a","b","c"],[true, true, true]]
let multiD2 = [[true,false,true],[false,false,true]]


function arrayScanner(arr) {
    const newArr = [].concat(...arr);
    const type = typeof newArr[0];
    return newArr.every(item => type === typeof item)
}

console.log(arrayScanner(multiD));
console.log(arrayScanner(multiD2));
