const ask = require("readline-sync");
const grid =[];
let score = 0;
let gameIsOn = true;


//SPACE CONSTRUCTOR FUNCTION
function Location(isShip, isHit, display) {
    this.isShip = false;
    this.isHit = false;
    this.display = "~";
};


//GRID GENERATOR
function gridGen(num1, num2) {    
    for (let z = 0; z < num1; z++) {
        grid.push([]);
        for (let i = 0; i < num2; i++) {
            let newLocation = new Location(false, false, "~");
            grid[z].push(newLocation);
        }
    }
    return (grid);
};


//SHIP GENERATOR
function shipGen(num1) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < num1; i++) {
        let a = Math.floor(Math.random() *10);
        let b = Math.floor(Math.random() *10);
        grid[b][a].isShip = true;
    }
    return grid;
};


//CHECKCOORDS FUNCTION
function checkCoords(num1) {
    if (num1 !== 0 && num1 !== 1 && num1 !== 2 && num1 !== 3 && num1 !== 4 && num1 !== 5 && num1 !== 6 && num1 !== 7 && num1 !== 8 && num1 !== 9) {
        num1 = 0;
    }
};

//ATTACK FUNCTION
function attack(x, y) {
    if (grid[y][x].isShip === true && grid[y][x].isHit === false) {
        score++;
        grid[y][x].isHit = true;
        console.log("Captain, that's a HIT!!")
    } else {
        grid[y][x].isHit = true;
        console.log("Looks like we missed, Captain.")
    }
};

//GAME CONTINUE
function gameContinueCheck() {
    if (score >= 3) {
        console.log("Great sailing, Captain " + name + "! You've won this battle!");
        gameIsOn = false;
    }
}

gridGen(10, 10);
console.log(shipGen(20));

const name = ask.question("Hi there captain! What's your name?")
console.log("Kindly met, Captain " + name + ", and just in time! Help us win this battle!")


while (gameIsOn === true) {
    if (gameIsOn === false) {
        break
    }
    
    let x = ask.question("Please provide an X coordinate for your attack: 0-9.");
    let y = ask.question("Please provide a Y coordinate for your attack: 0-9.");

    checkCoords(x);
    checkCoords(y);
//    console.log(x, y);
    attack(x, y);
    gameContinueCheck();
}