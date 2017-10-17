const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [2, 4, 6, 8];

function evenChecker(input) {
    return input % 2 === 0;
}

function every(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (!f(current)) {
            return false;
        }
    }
    return true;
}

function some(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (f(current)) {
            return true;
        }
    }
    return false;
}

console.log(every(array1, evenChecker));
console.log(some(array1, evenChecker));
