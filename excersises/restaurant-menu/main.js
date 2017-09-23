var menu = [];

function MenuItem(dish, price, wait) {
    this.dish = dish;
    this.price = price;
    this.waitTime = wait;
}

var steak = new MenuItem("Steak Marsala", 26, 32);
var chickenCordon = new MenuItem("Chicken Cordon Bleu", 19, 23);
var thinSlicedChicken = new MenuItem("Thin-Slicked n Spice-Breaded Chicken", 13, 7);
var pepPizza = new MenuItem("pepperoni pizza", 15, 20);
var chickenSlaw = new MenuItem("chicken n slaw", 12, 8);
var honeySalmon = new MenuItem("honeyed salmon", 27, 29);

menu.push(steak, chickenCordon, thinSlicedChicken, pepPizza, chickenSlaw, honeySalmon);

console.log(menu);

var menuText = document.getElementById("menuText");

menuText.innerHTML = `<li><span id="item1">Steak Marsala</span><br>Price: <span id="price1">26</span><br>Wait Time: <span id="wait1">32</span></li>
                            <li><span id="item2">Chicken Cordon Bleu</span><br>Price: <span id="price2">19</span><br>Wait Time: <span id="wait2">23</span></li>
                            <li><span id="item3">Thin-Slicked n Spice-Breaded Chicken</span><br>Price: <span id="price3">13</span><br>Wait Time: <span id="wait3">7</span></li>`

 