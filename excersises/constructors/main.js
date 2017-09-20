var employees = [];

function Employee( name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full Time";    
}

Employee.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + " Status: " + this.status)
}
 
var myEmployee = new Employee("John", "Butcher", "$38,000");
employees.push(myEmployee);
myEmployee.printEmployeeForm();
var myEmployee = new Employee("Sandra", "Bob-Omb Detector", "$67,000");
employees.push(myEmployee);
myEmployee.printEmployeeForm();
var myEmployee = new Employee("Tim", "Hair Dresser", "$47,000");
employees.push(myEmployee);
myEmployee.printEmployeeForm();

employees[1].status = "Contracted";

console.log(employees);




























//var animals = [];
//
//function Animal( type, color, numberOfLimbs, taxonomyClass, sound ) {
//    this.type = type;
//    this.color = color;
//    this.numberOfLimbs = numberOfLimbs;
//    this.taxonomyClass = taxonomyClass;
//    this.sound = sound;
//    
//    this.speak = function() {
//        console.log(this.sound);
//    }
//    
//}
//
//var myAnimal = new Animal("dog", "black", 4, "mammal", "woof");
//animals.push(myAnimal);
//
//myAnimal.speak();
//
//animals[0].sound = "ruff"
//
//myAnimal.speak();






//var myAnimal = new Animal("bear", "black", 4, "mammal");
//animals.push(myAnimal);
//var myAnimal = new Animal("dog", "brown", 4, "mammal");
//animals.push(myAnimal);
//var myAnimal = new Animal("jaguar", "spotted brown", 4, "mammal");
//animals.push(myAnimal);
//var myAnimal = new Animal("alligator", "green", 4, "reptile");
//animals.push(myAnimal);
//
////console.log(animals[2].color);
//
//var mammalArray = [];
//for (i = 0; i < animals.length; i++) {
//    if (animals[i].taxonomyClass === "mammal") {
//        mammalArray.push((animals[i]));
//    }
//}
//
//console.log(mammalArray);