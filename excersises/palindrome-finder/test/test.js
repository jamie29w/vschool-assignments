var chai = require("chai");
var assert = chai.assert;
var fnx = require("../main.js");
//npm install chai in terminal

describe("a palindrome-checker", function() {
    
    it("should check for the same letters forwards and backwards", function() {
        assert.equal(fnx.isPalindrome("racecar"), true);
        assert.equal(fnx.isPalindrome("race car"), true);
        assert.equal(fnx.isPalindrome("raceca"), false);
        assert.equal(fnx.isPalindrome("blah"), false);
    });
    
    it("should disregard all non-alpha characters", function() {
        assert.equal(fnx.isPalindrome("Star Rats!"), true);
        assert.equal(fnx.isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"), true);
    });
});
