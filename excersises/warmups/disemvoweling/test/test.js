const chai = require("chai");
const assert = chai.assert;

const disemvowel = require("../app");

let tests = {
    case0: "testsentence",
    case1: "pickle rick"
};

describe("disemvowel", () => {
    it("should return an obj with the vowel and consanants as key value pairs", () => {
        assert.deepEqual(disemvowel(tests.case0), {
            str: "tstsntnc",
            vowels: "eeee"
        });
    });
    it("should return an obj with the vowel and consanants as key value pairs", () => {
        assert.deepEqual(disemvowel(tests.case1), {
            str: "pcklrck",
            vowels: "iei"
        });
    });
});
