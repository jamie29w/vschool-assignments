var ask = require("readline-sync");

//var grid =[];
//create for loop (loopA) to push num1 0s to grid
//create for loop (loobB) to run loopA num1 times
//nest loops
//insert into function
//call function with arg num1

var grid =[];

function gridMeister(num1, num2) {    
    for (var z = 0; z < num1; z++) {
        grid.push([]);
        for (var i = 0; i < num2; i++) {
            grid[z].push(0);
        }
    }
    return grid;
};

console.log(gridMeister(10, 10));
console.log("");

//LOCATION GENERATOR
//randomly select 10 sets of x and y coordinates
//change each from 1 to 9 - DO NOT CONSOLE.LOG IN GAME

function locationGen(num1) {
    var a = 0;
    var b = 0;
    var gridSum = 0;    
    for (var i = 0; i < num1; i++) {
        var a = Math.floor(Math.random() *10);
        var b = Math.floor(Math.random() *10);
        grid[b][a] = 7;
    }
    return grid;
};
console.log(locationGen(10));


//function locationGen(num1) {
//    var a = 0;
//    var b = 0;
//    var gridSum = 0;    
//    for (gridSum = 0; gridSum < 71;) {
//        var a = Math.floor(Math.random() *10);
//        var b = Math.floor(Math.random() *10);
//        grid[b][a] = 7;
//        gridSum = grid.reduce(function(sum, number) {
//            return sum + number;
//        });
//    }
//    return grid;
//};
//console.log(locationGen(10));



//crossed X & Y coordinates too make more pleasurable experience

//var x = parseInt(ask.question("Enter X coordinate, 1-10: ") - 1);
//var y = parseInt(ask.question("Enter Y coordinate, 1-10: ") -1);
//
//grid[y][x] = 1;
//
//console.log(grid);



//considering inverting y axis
//0 => 10   9
//1 => 9    8
//2 => 8    6
//3 => 7    4
//4 => 6    2
//5 => 5    0
//6 => 4    -2
//7 => 3    -4
//8 => 2    -6
//9 => 1    -8