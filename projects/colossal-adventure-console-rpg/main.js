var ask = require('readline-sync');

var isPlayerAlive = true;
var isDonePlaying = "n";

var player = {
    name: "",
    exp: 0,
    hp: 10,
    strength: 7,
    inventory: []
};

var darthVader = {
    name: "Darth Vader",
    exp: 5,
    hp: 5,
    giftHP: 3,
    strength: 5,
    inventory: ["red lightsaber"]
};
var voldemort = {
    name: "Lord Voldemort",
    exp: 10,
    hp: 8,
    giftHP: 6,
    strength: 8,
    inventory: ["elder wand"]
};
var sephiroth = {
    name: "Sephiroth",
    exp: 15,
    hp: 12,
    giftHP: 8,
    strength: 11,
    inventory: ["spliced genes"]
};
var sauron = {
    name: "Lord Sauron",
    exp: 100,
    hp: 100,
    giftHP: 20,
    strength: 35,
    inventory: ["missing finger"]
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};



player.name = ask.question("Welcome to bad guy hell! I hope you have legit super powers, cuz it's dangerous down here. What can we call you? \n");

console.log("Well, it's to meet you, " + player.name + ". Around these parts, you'll want to keep moving. You can do that by typing 'w' as in walk, and 'Return'. \n");

while (isPlayerAlive === true) {
    if (isPlayerAlive === false) {
        console.log(player);
        console.log("GAME OVER.");
        break;
    };
    keepWalking()
};

//END OF FOR LOOP

//DEFINE FUNCTIONS:

function keepWalking(input) {
    var doesWalk = ask.question("To keep walking, type 'w' and 'Return'.\nTo see your stats and inventory, type 'i' and 'Return'.\nTo quit playing, type 'q' and 'Return'.\n");
    console.log("");
    if (doesWalk === "w") {
        doesEnemyAppear();
    } else if (doesWalk === "i") {
        console.log(`Player's Name: ${player.name}, HP: ${player.hp}, Strength: ${player.strength}, Experience: ${player.exp}, & Inventory: ${player.inventory}.`);
        console.log("");
    } else if (doesWalk !== "w" && doesWalk !== "i") {
        isDonePlaying = ask.question("Are you done playing? Type y or n. \n");
    };
    if (isDonePlaying !== "n") {
        console.log("Enjoy having a real life " + player.name + "! \n");
        isPlayerAlive = false;
    };
};

function doesEnemyAppear() {
    let ranNum = getRandomInt(0,3);
    if (ranNum === 1) {
        determineEnemy();
        isPlayerRunning();
    } else {
        console.log("Nothing new around these parts.\n")
    };
};

function determineEnemy() {
    let ranNum = getRandomInt(0, 14);
    if (ranNum <= 5) {
        enemyIs = darthVader;
    } else if (ranNum > 5 && ranNum <= 10) {
        enemyIs = voldemort;
    } else if (ranNum > 10 && ranNum <= 13) {
        enemyIs = sephiroth;
    } else if (ranNum === 14) {
        enemyIs = sauron
    };
};

function isPlayerRunning() {
    console.log("You've StumbleUpon'd a wild " + enemyIs.name + "!");
    choices = ['Fight to the death!', 'Tuck tail and run...', 'Curl up and die...'];
    var runFightOrDie = parseInt(ask.keyInSelect(choices, "What do you want to do? \n") + 1);
    if (runFightOrDie === 1) {
        combat(enemyIs);
    } else if (runFightOrDie === 2) {
        isRunSuccessful();
    } else if (runFightOrDie === 3) {
        console.log(enemyIs.name + " slaughtered your face, family, and foes alike. Thanks for letting us all down, " + player.name + ". GAME OVER.\n");
        isPlayerAlive = false
    };
};

function isRunSuccessful() {
    let ranNum = getRandomInt(1,2);
    if (ranNum === 0) {
        console.log("You got away, but your dignity didn't. \n");
    } else if (ranNum === 1) {
        console.log("If you're lucky, they won't tell about how you tried to run before you died... \n");
        combat(enemyIs)
    };

};


function combat(enemy) {
    while (enemyIs.hp > 0 && player.hp > 0) {
        playerAttacks();
        if (enemyIs.hp <= 0) {
            console.log(enemyIs.name + " has been defeated! Great work, " + player.name + "!.\n");
            gainSpoils();
            break
        };
        enemyAttacks();
        if (player.hp <= 0) {
            console.log(enemyIs.name + " slaughtered your face, family, and foes alike. Thanks for letting us all down, " + player.name + ". GAME OVER.\n")
            isPlayerAlive = false
        };
    };
    battleReset();
};

function playerAttacks() {
    enemyDamage = Math.floor(player.strength * Math.random());
    enemyIs.hp = enemyIs.hp - enemyDamage;
    console.log("You attacked " + enemyIs.name + " for " + enemyDamage + " damage! \n" + enemyIs.name + " has " + enemyIs.hp + " HP left.\n");
};

function enemyAttacks() {
    playerDamage = Math.floor(enemyIs.strength * Math.random());
    player.hp = player.hp - playerDamage;
    console.log(enemyIs.name + " attacked you for " + playerDamage + " damage! \n" + "You have " + player.hp + " HP left.\n");
};

function gainSpoils() {
    player.inventory.push(" " + enemyIs.inventory);
    player.hp = player.hp + enemyIs.giftHP;
    player.exp = player.exp + enemyIs.exp;
    player.strength = Math.floor(player.exp * .5) + 5;
    console.log(`${player.name} acquired a ${enemyIs.inventory}, gained ${enemyIs.exp} experience, and ${enemyIs.giftHP} HP for slaying ${enemyIs.name}.`)
    console.log(`${player.name} now has ${player.hp} HP, ${player.strength} strength, and ${player.exp} experience.`)
};

function battleReset() {
    player.strength = Math.floor(player.exp * 0.2) + 7;
    
    darthVader.hp = 5;
    darthVader.strength++;
    darthVader.giftHP++;
    
    voldemort.hp = 8
    voldemort.strength++;
    voldemort.giftHP++;
    
    sephiroth.hp = 12,
    sephiroth.strength++;
    sephiroth.giftHP++;
    
    sauron.hp = 25,
    sauron.strength++;
    sauron.giftHP++;
};