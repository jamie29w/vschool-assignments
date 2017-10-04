const chai = require("chai");
const assert = chai.assert;

const decipher = require("../main");

describe("An output code", () => {
    it("should have only one of each word that has duplicates", () => {
        assert.deepEqual(decipher("banh banh banh"), ["banh"]);
        assert.deepEqual(decipher("test test banh"), ["test"]);
        assert.deepEqual(decipher("test unique banh"), []);
        assert.deepEqual(decipher("test test banh cycle banh banh"), ["test", "banh"]);
        assert.deepEqual(decipher("a b a b a c"), ["a", "b"]);
    });
});