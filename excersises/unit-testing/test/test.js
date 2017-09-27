var chai = require("chai");
var assert = chai.assert;

var fnx = require("../calc.js");

xdescribe("A calculator", function() {
    it("should add two numbers", function() {
        assert.equal(fnx.add(1, 2), 3);
        assert.equal(fnx.add(-1, -2), -3);
    });
    
    it("should subtract the second number from the first", function() {
        assert.equal(fnx.sub(1, 3), -2);
        assert.equal(fnx.sub(3, 2), 1);
        assert.equal(fnx.sub(1000, 2), 998);
    });
    
    it("should mulitply two numbers", function () {
        assert.equal(fnx.mult(1, 3), 3);
        assert.equal(fnx.mult(3, -2), -6);
        assert.equal(fnx.mult(-5, -25), 125);
        assert.equal(fnx.mult(1000, 2), 2000);
        assert.equal(fnx.mult(1000, 0), 0);
    });
    
    it("should divide the second number from the first", function() {
        assert.equal(fnx.divi(3, 1), 3);
        assert.equal(fnx.divi(6, -2), -3);
        assert.equal(fnx.divi(1000, 2), 500);
        assert.equal(fnx.divi(-100, -2), 50);
        assert.equal(fnx.divi(-10, -.5), 20);
        assert.equal(fnx.divi(0, -3), 0);
        assert.equal(fnx.divi(-10, 0), -Infinity);
        assert.equal(fnx.divi(1, 0), Infinity);
    });
    
});

describe("lastNums", function() {
    it("given two numbers, return true if the last digit is the same in both", function() {
        assert.isFalse(fnx.lastNums(11, 2));
        assert.isTrue(fnx.lastNums(-12, -2));
        assert.isFalse(fnx.lastNums(30, 21));
        assert.isTrue(fnx.lastNums(13.04, 104));
        assert.isTrue(fnx.lastNums(14, 103.4));
    });
        
});