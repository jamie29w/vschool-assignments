//Given an array of strings, find the 3 adjacent elements with the
//longest combined length. Return them in the form of an array.
// Example:
// For inputArray = ["this", "is, "an", "array],the output of
//combined(inputArray) should return ["is", "an", "array"] because they have
//the longest combined length of any 3 adjacent elements.

//for each group return str length
//if new str length is greater than previous str length return three contributing strings

const arr1 = ["don't", "not", "balderdash", "or", "slippery"];

adjDiff = arr => {
    let arrLength = 0;
    let indexofLongest = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        let newArrLength = [...arr[i], ...arr[i + 1], ...arr[i + 2]].length;
        newArrLength > arrLength
            ? ((arrLength = newArrLength), (indexofLongest = i))
            : (arrLength = arrLength);
    }
    // return arr.map(str, i) => {
    //     return (
    //         let newArrLength = [...arr[i], ...arr[i + 1], ...arr[i + 2]].length;
    //         newArrLength > arrLength ? ((arrLength = newArrLength), (indexofLongest = i)) : (arrLength = arrLength);
    //     )
    // }

    return arr.slice(indexofLongest, indexofLongest + 3);
};

console.log(adjDiff(arr1));
console.log(arr1);

module.exports = adjDiff;
