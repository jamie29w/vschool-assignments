const greet1 = require("./greet1");

// greet1();

const greet2 = require("./greet2");
greet2.puppies();
greet2.greet();

const greet2alt = require("./greet2").puppies;
greet2alt();

const Person = require("./person");
const sammy = new Person("Sammy", 38);
sammy.speak();
