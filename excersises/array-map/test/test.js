const chai = require("chai");
const assert = chai.assert;

const fnx = require("../main.js");

describe("an array doubler", () => {
    it("should double each number in an array", () => {
        assert.deepEqual(fnx.doubleNumbers([2, 4, 6]), [4, 8, 12]);
        assert.deepEqual(fnx.doubleNumbers([2, -4, 6]), [4, -8, 12]);
        assert.deepEqual(fnx.doubleNumbers([0, 4, 6]), [0, 8, 12]);
    });
});

describe("a stringer", () => {
    it("should turn an array of numbers into an array of strings", () => {
        assert.deepEqual(fnx.stringItUp([2, 4, 6]), ["2", "4", "6"]);
        assert.deepEqual(fnx.stringItUp([2.6, 4, 6]), ["2.6", "4", "6"]);
        assert.deepEqual(fnx.stringItUp([2, -4, 6]), ["2", "-4", "6"]);
        assert.deepEqual(fnx.stringItUp([2, 4, 0]), ["2", "4", "0"]);
    });
});

describe("a namesOnly fxn", () => {
    it("should return an array of just the objects' names", () => {
        assert.deepEqual(fnx.namesOnly([
           {
             name: "Angelina Jolie",
             age: 80
           },{
             name: "Eric Jones",
             age: 2
           },{
             name: "Paris Hilton",
             age: 5
           },{
             name: "Kayne West",
             age: 16
           },{
             name: "Bob Ziroll",
             age: 100
           }
        ]), [
            "Angelina Jolie",
            "Eric Jones",
            "Paris Hilton",
            "Kayne West",
            "Bob Ziroll"
        ]);
    });
});

describe("an age checker", () => {
    const tests = {
        test1: [{name: "James", age: 42}, {name: "Jill", age: 17}],
        test2: [{name: "Avonlea", age: 0}]
    }
    it("should tell us that people 18 and older to see The Matrix and that those under 18 are under age.", () => {
        assert.deepEqual(fnx.ofAgeChecker(tests.test1), ["James can go to The Matrix",
        "Jill is under age!!"]);
        assert.deepEqual(fnx.ofAgeChecker(tests.test2), ["Avonlea is under age!!"])
        assert.deepEqual(fnx.ofAgeChecker([
           {
                name: "Angelina Jolie",
                age: 80
           },{
                name: "Eric Jones",
                age: 2
           },{
                name: "Paris Hilton",
                age: 5
           },{
                name: "Kayne West",
                age: 16
           },{
                name: "Bob Ziroll",
                age: 100
           }
         ]), [
             "Angelina Jolie can go to The Matrix",
             "Eric Jones is under age!!",
             "Paris Hilton is under age!!",
             "Kayne West is under age!!",
             "Bob Ziroll can go to The Matrix"
         ]);
    });
});

describe("a DOM-ready checker", () => {
    it("should have HTML scripts that make the name an H1 element and the age an H2 element", () => {
        assert.deepEqual(fnx.readyToPutInTheDOM([
            {
                name: "Angelina Jolie",
                age: 80
            },{
                name: "Eric Jones",
                age: 2
            },{
                name: "Paris Hilton",
                age: 5
            },{
                name: "Kayne West",
                age: 16
            },{
                name: "Bob Ziroll",
                age: 100
            }
            ]), [
                "<h1>Angelina Jolie</h1><h2>80</h2>",
                 "<h1>Eric Jones</h1><h2>2</h2>",
                 "<h1>Paris Hilton</h1><h2>5</h2>",
                 "<h1>Kayne West</h1><h2>16</h2>",
                 "<h1>Bob Ziroll</h1><h2>100</h2>"
            ]);
    });
});
