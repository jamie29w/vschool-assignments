// function sayHi() {
//     console.log("Hi!");
// }
//
// sayHi();

var time = 10;

console.log(time);

function decrement() {
    time = time - 1;
    console.log(time);
}

setInterval(function() {
    decrement(time);
}, 1000);

//1 start with 20, call it currTime
//2 decrement by 1, every 1000 milliseconds
//3 display currTime
//if 0, stop. if not 0, go back to step 2
