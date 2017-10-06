//Use .map() for all:

//1) Make an array of numbers that are doubles the the first array

// function doubleNumbers(arr){
//     let doubledArr = arr.map((num) => {
//         return num * 2;
//     });
//     return doubledArr;
// };

function doubleNumbers(arr){
    return arr.map(num => num * 2)
};

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//2) Take an array of numbers and make them strings

 // function stringItUp(arr){
 //     let strungArr = arr.map((num) => {
 //         return num.toString();
 //     });
 //     return strungArr;
 // }

 // function stringItUp(arr){
 //     return arr.map(num => num.toString())
 // };

function stringItUp(arr){
    return arr.map(String)
};

 console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

//3) Make an array of strings of the names

 // function namesOnly(arr){
 //     let nameArr = arr.map((person) => {
 //         return person.name;
 //     });
 //     return nameArr;
 // };

 function namesOnly(arr){
     return arr.map(person => person.name)
 };

 console.log(namesOnly([
   {
     name: "Angelina Jolie",
     age: 80
   },{
     name: "Eric Jones",
     age: 2
   },{
     name: "Paris Hilton",
     age: 5
   },{
     name: "Kayne West",
     age: 16
   },{
     name: "Bob Ziroll",
     age: 100
   }
 ]));
 // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


//4) Make an array of strings of the names saying whether or not they can go to The Matrix

// function ofAgeChecker(arr){
//     let ofAgeArr = arr.map((person) => {
//         if (person.age >= 18) {
//             return `${person.name} can go to The Matrix`;
//         } else {
//             return `${person.name} is under age!!`
//         };
//     });
//     return ofAgeArr;
// };

function ofAgeChecker(arr){
    return arr.map(person => {
        if (person.age >= 18) {
            return `${person.name} can go to The Matrix`;
        } else {
            return `${person.name} is under age!!`
        };
    });
};

console.log(ofAgeChecker([
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
]));

// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]


//5) Make an array of the names in H1s, and the ages in H2s


function readyToPutInTheDOM(arr){
    let domReadyArr = arr.map((person) => {
        return `<h1>${person.name}</h1><h2>${person.age}</h2>`
    });
    return domReadyArr;
};

console.log(readyToPutInTheDOM([
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
]));

// ["<h1>Angelina Jolie</h1><h2>80</h2",
// "<h1>Eric Jones</h1><h2>2</h2",
// "<h1>Paris Hilton</h1><h2>5</h2",
// "<h1>Kayne West</h1><h2>16</h2",
// "<h1>Bob Ziroll</h1><h2>100</h2"]

module.exports = {
    doubleNumbers: doubleNumbers,
    stringItUp: stringItUp,
    namesOnly: namesOnly,
    ofAgeChecker: ofAgeChecker,
    readyToPutInTheDOM: readyToPutInTheDOM
};
