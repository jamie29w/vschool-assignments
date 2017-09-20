var carTypes = ["truck", "van", "sedan"];

var cars = [  
    {make: "Ford", year: 2001, model: "E150", price: 10000},
    {make: "Chevy", year: 2011, model: "Camaro", price: 20010},
    {make: "Toyota", year: 2014, model: "Tacoma", price: 30900},
    {make: "Ford", year: 2003, model: "Explorer", price: 9000},
    {make: "Ford", year: 2017, model: "F250", price: 2400},
];


//Use .forEach() to replace the following for loop.
//for (var i = 0; i < carTypes.length; i++) {  
//  console.log(`${carTypes[i]} goes vroom`);
//};
//
carTypes.forEach(function(carType) {
    console.log(carType + " goes vroom");
})



//Use .map() to replace the following for loop.
var angryCars = [];

//for (var i = 0; i < cars.length; i++) {  
//  angryCars.push(cars[i].toUpperCase());
//};
//
var angryCars = carTypes.map(function(carType) {
    return carType.toUpperCase();
})

console.log(angryCars);


//Use .filter() to replace the following for loop.
//var newCars = [];
//
//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].year > 2005){
//    newCars.push(cars[i]);
//  }
//};
//
//
var newCars = cars.filter(function(car) {
    return car.year > 2005;
});

console.log(newCars);



//Use .find() to replace the following for loop.
//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].model === "E150"){
//    var coolVan = cars[i];
//    break;
//  }
//};
//
var coolVan = cars.find(function(car) {
    return car.model === "E150";
});


console.log(coolVan);

//Use .some() to replace the following for loop.
//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].model === "E150"){
//    console.log("There is one or more E150s");
//    break;
//  }
//};
//
var areThereAnyE150s = cars.some(function(car) {
    return car.model === "E150";
})

console.log(areThereAnyE150s);


//Use .every() to replace the following for loop.
//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].model !== "E150"){
//    console.log("Not every car is an E150");
//    break;
//  }
//};
//
//
var areAllCarsE150s = cars.every(function(car) {
    return car.model === "E150";
})

console.log(areAllCarsE150s);


////Use .reduce() to replace the following for loop and carTotals definition.
//var numberOfFords = 0;  
//var numberOfChevys = 0;
//
//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].model === "ford"){
//    numberOfFords ++;
//  }
//  if (cars[i].model === "chevy"){
//    numberOfchevys ++;
//  }
//};
//
//var carTotals = { numberOfFords: numberOfFords, numberOfchevys: numberOfchevys } ; 

