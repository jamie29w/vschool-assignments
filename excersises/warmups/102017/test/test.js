const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;

const twoSum = require("../app");

const tests = {
    case0: {
        arr: [1, 2, 3],
        target: 4
    },
    case1: {
        arr: [1, 2, 3],
        target: 3
    },
    case2: {
        arr: [1, 2, 3],
        target: 6
    }
};

describe("a twoSum function", () => {
    it("should return an array of the two indices of elements that add to the target", () => {
        assert.deepEqual(twoSum(tests.case0.arr, tests.case0.target), [0, 2]);
        assert.deepEqual(twoSum(tests.case1.arr, tests.case1.target), [0, 1]);
    });

    it("should return a notification if no two elements in the array add to the target", () => {
        assert.typeOf(twoSum(tests.case2.arr, tests.case2.target), "string");
    });
});
