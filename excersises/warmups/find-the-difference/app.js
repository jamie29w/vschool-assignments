//Create a function that takes two arrays and returns an array of the items tha
//are unique.

// Given two arrays (for example array A = [1, 2, 3] and array B = [2, 3, 4]),
// find the set of elements which are in one of the two arrays, but not in both.

// The function should return an array of all the unique items. From the example
// above, it would return [1, 4], not necessarily in that order. (Order is
// unimportant).

diffFinder = (arr1, arr2) => {
    const arr1Uniques = arr1.filter(item => !arr2.includes(item));
    const arr2Uniques = arr2.filter(item => !arr1.includes(item));
    return Array.from(new Set(arr1Uniques.concat(arr2Uniques)));

    //alt solution:
    // const comboArr = [...arr1, ...arr2];
    // return comboArr.filter(
    //     item => comboArr.indexOf(item) === comboArr.lastIndexOf(item)
    // );
};

console.log(diffFinder([(1, 2, 3)], [2, 3, 4]));

module.exports = diffFinder;
