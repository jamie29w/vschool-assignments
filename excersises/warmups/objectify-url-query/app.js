//Write a function that takes a query string and and then
//returns an HTTP endpoint and a query object.

// Example:

let inputUrl = "http://localhost:8080/monkeys?color=black&species=howler";

//returns "http://localhost:8080/monkeys"  {color: "black", "howler"}

objectifyUrl = urlQuery => {
    let query = {};
    urlQuery = urlQuery.slice(urlQuery.indexOf("?") + 1).split(/[&=]/);
    if (urlQuery.length < 2) return {};
    for (let i = 0; i < urlQuery.length; i += 2) {
        query[urlQuery[i]] = urlQuery[i + 1];
    }
    return query;
};

console.log(objectifyUrl(inputUrl));
