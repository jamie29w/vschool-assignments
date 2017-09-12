var phone = {
    make: "Apple",
    model: "iPhone 7",
    color: "Black",
    favoriteApps: ["Thermostat", "Inbox", "GroupMe", "Messages"]
}

console.log(phone.make);

var laptop = {
    make: "Apple",
    model: "MacBook Pro",
    body: "Aluminum"
}

console.log(laptop.make.concat(" " + laptop.model));

var beverage = {
    isCoffee: false,
    isChai: true,
    cupIsFull: false,
    cupIsEmpty: false,
}

console.log(beverage.isChai);

var wife = {
    firstName: "Alexa",
    favoriteAnimal: "rabbit",
    favoriteColor: "plumb",
    short: true,
    hotterThanYourWife: true,
    favoritePerson: "Jamie"
}

console.log(wife.firstName + "'s favorite color is " + wife.favoriteColor + ".");

var desk = {
    modes: 2,
    up: true,
    color: "black"
}

console.log(desk.color.toUpperCase());

var fan = {
    status: "spinning",
    madeOf: ["steel", "wood", "glass"],
    lightOn: true
}

console.log(fan.status + " so fast it looks sdrawkcaB!");

var window = {
    open: false,
    locked: true,
    panes: 2,
    color: "clear"
}

console.log(window.color.indexOf("e"));

var bed = {
    made: false,
    size: "queen",
    currentOccupants: 1,
}

console.log(bed.size.indexOf("q"));

var closet = {
    contains: ["clothes", "shoes", "empty hangers"],
    hasSkeletons: false,
    fullHangers: 132
}

console.log("I've got " + closet.contains.join(", ") + " in my closet.");

var webDev = {
    firstName: "Jamie",
    status: "Hard at work",
    levelOfCaffeination: "moderate",
    favoritePerson: "Alexa"
}

console.log(webDev.firstName + " is " + webDev.status + ", but his caffeine level is only " + webDev.levelOfCaffeination + ". Who can help him now? Oh, I know! " + webDev.favoritePerson + " can!");