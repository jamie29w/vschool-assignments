const chai = require("chai");
const assert = chai.assert;
const adjDiff = require("../main.js");

describe("an adjacent string checker", () => {
    it("should find the 3 longest adjacent strings", () => {
        assert.deepEqual(adjDiff(["a", "b", "c", "dd"]), ["b", "c", "dd"]);
        assert.deepEqual(adjDiff(["aaa", "b", "c", "dd"]), ["aaa", "b", "c"]);
        assert.deepEqual(adjDiff(["a", "bbb", "c", "dd"]), ["bbb", "c", "dd"]);
    });

    it("should not return undefined as a string", () => {
        assert.notInclude(adjDiff(["something"]), ["undefined"]);
    });

    it("should return all strings if there are fewer than 3 givn", () => {
        assert.deepEqual(adjDiff(["something"]), ["something"]);
        assert.deepEqual(adjDiff(["something", "else"]), ["something", "else"]);
        assert.deepEqual(adjDiff([]), []);
    });
});
