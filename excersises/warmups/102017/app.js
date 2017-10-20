// Given an array of integers, return indices of the two numbers such that they add
// up to a specific target. You may assume that each input would have exactly one
// solution, and you may not use the same element twice.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

nums = [1, 2, 3, 4];

//loop through arr checking each index against others (loop in loop)
//if indices add to target
//if so, return indeces

var twoSum = function(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let z = i + 1; z < arr.length; z++) {
            if (arr[i] + arr[z] === target) {
                return [i, z];
            }
        }
    }
    return `None of the indices add to ${target}`;
};

console.log(twoSum(nums, 5));

module.exports = twoSum;
