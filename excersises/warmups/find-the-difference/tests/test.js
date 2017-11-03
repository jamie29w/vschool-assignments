const chai = require("chai");
const assert = chai.assert;

const diffFinder = require("../app");

tests = {
    arr1: [1, 2, 3],
    arr2: [2, 3, 4],
    arr3: [0, -1, 2],
    arr4: ["thing1", "thing2", "2"]
};

it("a difference finder", () => {
    should("given two arrays, return an array of the unique items", () => {
        assert.deepEqual(diffFinder(tests.arr1, tests.arr2), [1, 4]);
        assert.deepEqual(diffFinder(tests.arr2, tests.arr3), [0, -1, 3, 4]);
    });

    should("be able to differentiate between numbers and strings", () => {
        assert.deepEqual(diffFinder(tests.arr3, tests.arr4), [
            0,
            -1,
            2,
            "thing1",
            "thing2",
            "2"
        ]);
    });
});
