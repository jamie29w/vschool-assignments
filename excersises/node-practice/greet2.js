//add a fxn expression as a property of module.exports

module.exports.greet = function() {
    console.log("hello from greet2.js");
};

module.exports.puppies = function() {
    console.log("WOOF!!");
};

// OR:
// function greet() {
//     console.log("hello from greet2.js");
// }
//
// function puppies() {
//     console.log("WOOF!!");
// }
//
// module.exports = {
//     greet,
//     puppies
// };
