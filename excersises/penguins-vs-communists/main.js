//class for parties
//construct parties
//randomGen attacks first
//sendNuke fnc
//randomGen dmg
//hit/miss msg
//while loop
    //call attack, counterattack while both pops > 0

class Party {
    constructor(name, population, number) {
        this.name = name;
        this.population = 1000000;
    };
};

const penguins = new Party ("Penguins");
const communists = new Party ("Communists");

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
                            


const fightsFirst = () => {
    let coinFlip = getRandomInt(1,2);
    if (coinFlip === 1) {
        return penguins;
    } else if (coinFlip === 2) {
        return communists;
    };
};

const sendNuke = party => {
    let hitOrMiss = getRandomInt(1,3);
    if (hitOrMiss === 1) {
        onHit(party);
    } else {
        console.log(`${party.name} holds a dance party! No lives lost.`)
    };
};

const onHit = party => {
    let damage = getRandomInt(100000, 500000);
    party.population = party.population - damage;
    console.log(`${party.name} weep and gnash their teeth. ${damage} ${party.name} lost their lives today.`)
};

//console.log(penguins, communists);
fightsFirst();


while (penguins.population > 0 && communists.population > 0) {
    
}





