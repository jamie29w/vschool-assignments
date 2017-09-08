var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("original");
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log("step 1");
vegetables.pop();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log("step 2");
fruit.shift();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log("step 3");
var indexOfOrange = fruit.indexOf("orange");
console.log(indexOfOrange);
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log("step 4");
fruit.push(indexOfOrange);
console.log(fruit);
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log("step 5");
var lengthOfVeg = vegetables.length;
console.log(lengthOfVeg);
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log("step 6");
vegetables.push(lengthOfVeg);
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log("step 7");
var food = fruit.concat(vegetables);
console.log(food);

console.log("step 8");
food.splice(4,2);
console.log(food);

console.log("step 9");
food.reverse();
console.log(food);

console.log("step 10");
console.log(food.join(", "));


