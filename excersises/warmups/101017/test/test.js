const chai = require("chai");
const assert = chai.assert;

var nPeater = require("../main");

describe("a nPeater", ()=> {
    it("should return all characters n number of times if there are three or fewer of the string", ()=> {
        assert.equal(nPeater("ah", 1), "ah");
        assert.equal(nPeater("ha", 2), "haha");
        assert.equal(nPeater("a", 0), "");
    });

    it("should return only the first three characters n times if there are more than three characters", ()=> {
        assert.equal(nPeater("blahblah", 1), "bla");
        assert.equal(nPeater("blahblah", 2), "blabla");
    });
})
