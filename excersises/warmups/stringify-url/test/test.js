const chai = require("chai");
const assert = chai.assert;

const stringifyQuery = require("../main");

const tests = {
    endpoint: "http://localhost:8010/narwhals",
    case1: {},
    case2: {
        gender: "unicorn"
    },
    case3: {
        gender: "unicorn",
        color: "rainbow"
    }
};

describe("a url stringify fxn", () => {
    it("should return just the endpoint if there is no query", () => {
        assert.equal(
            stringifyQuery(tests.endpoint, tests.case1),
            "http://localhost:8010/narwhals"
        );
    });
    it("given one query, should return the endpoint and one query", () => {
        assert.equal(
            stringifyQuery(tests.endpoint, tests.case2),
            "http://localhost:8010/narwhals?gender=unicorn"
        );
        assert.equal(
            stringifyQuery(tests.endpoint, tests.case3),
            "http://localhost:8010/narwhals?gender=unicorn&color=rainbow"
        );
    });
    it("given multiple queries, should return the endpoint, query1 '&' query2, etc", () => {
        assert.equal(
            stringifyQuery(tests.endpoint, tests.case3),
            "http://localhost:8010/narwhals?gender=unicorn&color=rainbow"
        );
    });
});
