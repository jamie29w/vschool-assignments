class Party {
    constructor(name, population, swagLevel, gnashers) {
        this.name = name;
        this.population = population;
        this.swagLevel = swagLevel;
        this.gnashers = gnashers;
    };
};

const penguins = new Party ("Penguins", 1000000, 11, "beaks");
const communists = new Party ("Communists", 1000000, 6, "teeth");

console.log(`There are ${penguins.population} ${penguins.name} willing to stand their ground against the ${communists.population} ${communists.name} invaders. This is going to get slippery...`);
console.log("");

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function flipCoin (party1, party2) {
    let headsOrTails = getRandomInt(1,2);
    if (headsOrTails === 1) {
        while (party1.population > 0 && party2.population > 0) {
            sendNuke(party1);
                if (party1.population <= 0) {break};
            sendNuke(party2);
            console.log("");
        };
    } else {
        while (party2.population > 0 && party1.population > 0) {
            sendNuke(party2);
                if (party2.population <= 0) {break};
            sendNuke(party1);
            console.log("");
        };
    };
};

function onHit (party){
    let damage = getRandomInt(100000, 500000);
    party.population = party.population - damage;
    console.log(`${party.name} weep and gnash their ${party.gnashers}. ${damage} ${party.name} lost their lives today.`)
};

function onMiss (party){
    console.log(`${party.name} holds a dance party! No lives lost.`)
};

function sendNuke (party, onHit, onMiss){
    function onHit (party) {
        let damage = getRandomInt(100000, 500000);
        party.population = party.population - damage;
        if (party.population > 0) {
            console.log(`${party.name} weep and gnash their ${party.gnashers}. ${damage} ${party.name} lost their lives today.`);
        } else {
            console.log(`The ${party.name} have no tears to weep or ${party.gnashers} to gnash. They have perished from the Earth.`);
            console.log("");
        };
    };
    function onMiss (party) {
        console.log(`${party.name} hold a dance party! No lives lost.`)
    };
    let hitOrMiss = getRandomInt(1,3);
    if (hitOrMiss === 1) {
        onHit(party);
    } else onMiss(party);
};

flipCoin(penguins, communists);