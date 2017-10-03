const ask = require('readline-sync');
let isPlayerAlive = true;
let isDonePlaying = "n";

const player = {
    name: "",
    exp: 0,
    hp: 12,
    strength: 8,
    inventory: []
};

const joker = {
    name: "Joker",
    exp: 12,
    hp: 10,
    giftHP: 3,
    strength: 3,
    inventory: ["joker card"]
};

const darthVader = {
    name: "Darth Vader",
    exp: 13,
    hp: 12,
    giftHP: 7,
    strength: 8,
    inventory: ["red lightsaber"]
};

const voldemort = {
    name: "Lord Voldemort",
    exp: 15,
    hp: 15,
    giftHP: 10,
    strength: 10,
    inventory: ["elder wand"]
};

const sephiroth = {
    name: "Sephiroth",
    exp: 25,
    hp: 25,
    giftHP: 18,
    strength: 18,
    inventory: ["spliced genes"]
};

const sauron = {
    name: "Lord Sauron",
    exp: 100,
    hp: 100,
    giftHP: 50,
    strength: 50,
    inventory: ["missing finger"]
};

const it = {
    name: "it",
    exp: 200,
    hp: 200,
    giftHP: 80,
    strength: 80,
    inventory: ["blessing of the Turtle"]
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

player.name = ask.question("Welcome to bad guy hell! I hope you have legit super powers, cuz it's dangerous down here. What can we call you? \n");

console.log("Well, it's nice to meet you, " + player.name + ". Around these parts, you'll want to keep moving. You can do that by typing 'w' as in walk, and 'Return'. \n");

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
    let doesWalk = ask.question("To keep walking, type 'w' and 'Return'.\nTo see your stats and inventory, type 'i' and 'Return'.\nTo quit playing, type 'q' and 'Return'.\n");
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
    let ranNum = getRandomInt(1,3);
    if (ranNum === 1) {
        determineEnemy();
        isPlayerRunning();
    } else {
        let ranWalkPhrase = getRandomInt(1,4);
        if (ranWalkPhrase === 1) {
            console.log("Nothing new around these parts.\n")
        } else if (ranWalkPhrase === 2) {
            console.log("Where's the party?\n")
        } else if (ranWalkPhrase === 3) {
            console.log("#tumbleweeds\n")
        } else if (ranWalkPhrase === 4) {
            console.log("Wonder if I can find some water around here.\n")
        };
    };
};

function determineEnemy() {
    let ranNum = getRandomInt(0, 19);
    if (ranNum <= 4) {
        enemyIs = joker;
    } else if (ranNum > 4 && ranNum <= 8) {
        enemyIs = darthVader;
    } else if (ranNum > 8 && ranNum <= 12) {
        enemyIs = voldemort;
    } else if (ranNum > 12 && ranNum <= 14) {
        enemyIs = sephiroth;
    } else if (ranNum > 14 && ranNum <= 16) {
        enemyIs = sauron
    } else if (ranNum === 17 || ranNum === 18) {
        enemyIs = sauron
    } else if (ranNum === 19) {
        enemyIs = it
    };
};

function isPlayerRunning() {
    console.log("You've StumbleUpon'd a wild " + enemyIs.name + "!");
    choices = ['Fight to the death!', 'Tuck tail and run...', 'Curl up and die...'];
    let runFightOrDie = parseInt(ask.keyInSelect(choices, "What do you want to do? \n") + 1);
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
    let ranNum = getRandomInt(0, 1);
    if (ranNum === 0) {
        console.log("If you're lucky, they won't tell about how you tried to run before you died... \n");
        combat(enemyIs)
    } else {
        console.log("You got away, but your dignity didn't. \n");
    };
};

function combat() {
    while (enemyIs.hp > 0 && player.hp > 0) {
        playerAttacks();
        if (enemyIs.hp <= 0) {
            console.log(`${enemyIs.name} has been defeated! Great work, ${player.name}!`);
            battleResolve();
            gainSpoils();
            break
        };
        enemyAttacks();
        if (player.hp <= 0) {
            console.log(enemyIs.name + " slaughtered your face, family, and foes alike. Thanks for letting us all down, " + player.name + ". GAME OVER.\n")
            isPlayerAlive = false
        };
    };
};

function playerAttacks() {
    enemyDamage = Math.floor((player.strength * .75) + (Math.random()* 5));
    enemyIs.hp = enemyIs.hp - enemyDamage;
    console.log("You attacked " + enemyIs.name + " for " + enemyDamage + " damage! \n" + enemyIs.name + " has " + enemyIs.hp + " HP left.\n");
};

function enemyAttacks() {
    playerDamage = Math.floor((enemyIs.strength * .75) + (Math.random()* 5));
    player.hp = player.hp - playerDamage;
    console.log(enemyIs.name + " attacked you for " + playerDamage + " damage! \n" + "You have " + player.hp + " HP left.\n");
};

function gainSpoils() {
    console.log(`${player.name} acquired a ${enemyIs.inventory}, gained ${enemyIs.exp} experience for slaying ${enemyIs.name}.`)
    console.log(`${player.name} now has ${player.hp} HP, ${player.strength} strength, and ${player.exp} experience.
`)
};

function battleResolve() {
    joker.exp++;
    joker.hp = joker.exp;
    joker.strength++;
    joker.giftHP++;
    
    darthVader.exp++;
    darthVader.hp = darthVader.exp;
    darthVader.strength++;
    darthVader.giftHP++;
    
    voldemort.exp++;
    voldemort.hp = voldemort.exp;
    voldemort.strength++;
    voldemort.giftHP++;
    
    sephiroth.exp++;
    sephiroth.hp = sephiroth.exp;
    sephiroth.strength++;
    sephiroth.giftHP++;
    
    sauron.exp++;
    sauron.hp = sauron.exp;
    sauron.strength++;
    sauron.giftHP++;
    
    it.exp++;
    it.hp = it.exp;
    it.strength++;
    it.giftHP++;
    
    player.inventory.push(" " + enemyIs.inventory);
    player.exp = player.exp + enemyIs.exp;
    player.strength = Math.floor(player.exp * 0.5) + 8;
    player.hp = Math.floor((player.exp * 1 / 3) + 9);
};