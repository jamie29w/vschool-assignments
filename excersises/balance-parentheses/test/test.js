const chai = require("chai");
const assert = chai.assert;

const parenthChecker = require("../main")

describe ("a parenth tester", () => {
    it("should check a string for paired parenth. If all are paired, return true. Else return false", () => {
        assert.isTrue(parenthChecker("()()"));
        assert.isTrue(parenthChecker("(())"));
        assert.isTrue(parenthChecker("((())())"));
        assert.isFalse(parenthChecker("()))"));
        assert.isFalse(parenthChecker("((()"));
        assert.isFalse(parenthChecker("()()()()()()()()()()()()()()()("));
    });

    it("should return false for closing parenth being before opening parenth", () => {
        assert.isFalse(parenthChecker(")()("));
        assert.isFalse(parenthChecker("))(("));
        assert.isFalse(parenthChecker("()()()()()()()()()()()()()()())"));
    })
})
