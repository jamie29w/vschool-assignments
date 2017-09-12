//Practice 1
var firstNames = "Kevin, Nicole, David, Kristin, Alexa, Jamie";
var lastNames = "McGilvery, Beck, Woodmancy"

// console.log(firstNames.concat(", " + lastNames));

var arrFN = firstNames.toLowerCase().split(", ");
var arrLN = lastNames.toUpperCase().split(", ");
console.log(arrFN[0] + " & " + arrFN[1] + " & " + arrLN[0] + " are married.");

//Practice 2
var vacationPorts = "Hawaii, New York, London"

var vacationCruises = "Disney, Disney, Disney"

var cruises = vacationCruises.split(", ");
var ports = vacationPorts.split(", ");

for (var i = 0; i < cruises.length; i++) {
  console.log("Jamie & Alexa want to go on a " + cruises[i] + " cruise that leaves from " + ports[i] + ".");
};


//Practice 3
