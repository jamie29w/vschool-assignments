var menu = [];

function MenuItem(dish, price, wait) {
    this.dish = dish;
    this.price = price;
    this.waitTime = wait;
};

var steak = new MenuItem("Steak Marsala", 26, 32);
var chickenCordon = new MenuItem("Chicken Cordon Bleu", 19, 23);
var thinSlicedChicken = new MenuItem("Thin-Slicked n Spice-Breaded Chicken", 13, 7);
var pepPizza = new MenuItem("Pepperoni Pizza", 15, 20);
var chickenSlaw = new MenuItem("Chicken n Slaw", 12, 8);
var honeySalmon = new MenuItem("Honeyed Salmon", 27, 29);

menu.push(steak, chickenCordon, thinSlicedChicken, pepPizza, chickenSlaw, honeySalmon);

var menuPlaceholder = document.getElementById("menuPlaceholder");

for (var i = 0; i < menu.length; i++) {
    menuPlaceholder.innerHTML += "<li>" + menu[i].dish + "<br>" + "Price: " + menu[i].price + "<br>" + "Wait Time: " + menu[i].waitTime + "</li>";
};