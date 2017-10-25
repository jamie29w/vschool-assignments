//write a function that takes an integer `n` and  returns the date `n` days ago

//getDaysBefore(3);
//returns  10/21/2017

function getDaysBefore(n) {
    let today = new Date();
    today.setDate(today.getDate() - n);
    return today.toLocaleDateString();
}
console.log(getDaysBefore(3));
