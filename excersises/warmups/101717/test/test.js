const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;

const shrink = require("../main.js");

describe("a shrink fxn", () => {
    it("should accept an integer", () => {
        assert.equal(shrink(9) % 1, 0);
        assert.equal(shrink(10) % 1, 0);
        assert.equal(shrink(11) % 1, 0);
    });

    it("should return the number of times the process takes to reduce input number to 1", () => {
        assert.equal(shrink(9), 2);
        assert.equal(shrink(3), 1);
        assert.equal(shrink(10), 2);
        assert.equal(shrink(1), 0);
    });
});
