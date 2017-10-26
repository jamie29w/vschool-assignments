numbase = [
    { a: 0, b: 2, c: 4, d: 9 },
    { a: 0, b: 1, c: 0, d: 0 },
    { a: 0, b: 0, c: 3, d: 0 },
    { a: 0, b: 0, c: 0, d: 6 },
    { a: 0, b: 0, c: 0, d: 0 },
    { a: 0, b: 2, c: 4, d: 2 }
];

let query = {
    a: 0,
    b: 2,
    c: 4
};

let query2 = {
    a: 0,
    d: 11
};

function filterDatabase(query, database) {
    return database.filter(doc => {
        for (let key in query) {
            if (doc[key] !== query[key]) {
                return false;
            }
        }
        return true;
    });
}

console.log(filterDatabase(query2, numbase));
