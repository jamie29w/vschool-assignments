const chai = require("chai");
const assert = chai.assert;

const validateIP = require("../main.js");

describe("An IP address", function() {
    it("should have 3 periods", function() {
        assert.isTrue(validateIP("123.123.123.132"));
        assert.isTrue(validateIP("1.1.1.1"));
        assert.isFalse(validateIP("1.1.1"));
    });
    
    it("should have 4 numbers", function() {
        assert.isTrue(validateIP("123.123.123.132"));
        assert.isTrue(validateIP("0.0.0.0"));
        assert.isFalse(validateIP("0.0.0.0.0"));
        assert.isFalse(validateIP("1.2.4"));
        assert.isFalse(validateIP("1.2."));
    });
    
    it("the numbers should range from 0-255", function() {
        assert.isTrue(validateIP("123.123.123.132"));
        assert.isTrue(validateIP("0.0.0.0"));
        assert.isFalse(validateIP("-1.0.0.0"));
        assert.isFalse(validateIP("1.0.0.-1"));
    });
    
    it("should only contain numbers in each secion", function() {
        assert.isFalse(validateIP("a.b.c.d"));
        assert.isFalse(validateIP("$.b.!.d"));
    });
    
});