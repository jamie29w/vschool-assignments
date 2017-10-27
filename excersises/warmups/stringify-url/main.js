//Write a function that takes a query object and an HTTP endpoint and then
//returns a URL with a query string.

// Example:

let endpoint = "http://localhost:8080/monkeys";
let query = {
    color: "black",
    species: "howler"
};
// stringifyQuery(endpoint, query);
//
//returns "http://localhost:8080/monkeys?color=black&species=howler"

console.log(endpoint, query);

stringifyQuery = (endpoint, query) => {
    let returnUrl = endpoint + "?";
    for (let key in query) {
        returnUrl += `${key}=${query[key]}&`;
    }
    returnUrl = returnUrl.slice(0, -1);
    return returnUrl;
};

console.log(stringifyQuery(endpoint, query));

module.exports = stringifyQuery;
