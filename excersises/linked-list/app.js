let a = {
    next: "b",
    value: "Ben"
};

let b = {
    next: "c",
    value: "Tom"
};

let c = {
    next: null,
    value: "Samantha"
};

let linkedList = {
    next: {
        next: {
            next: null,
            value: "Samantha"
        },
        value: "Tom"
    },
    value: "Ben"
};

// console.log(linkedList.next.next.value);

function linkedListGenerator(n) {
    if (n === 0)
        return {
            next: null,
            value: 0
        };
    return {
        next: linkedListGenerator(n - 1),
        value: n
    };
}
// console.log(linkedListGenerator(3));

function ascendingLinkedListGenerator(n) {
    let z = 0;
    if (z === n)
        return {
            next: null,
            value: z
        };
    return {
        next: ascendingLinkedListGenerator(z + 1),
        value: z
    };
}

// console.log(ascendingLinkedListGenerator(3));
