//Problem: 
//Given a group of prospective voters ranging from ages 18-55, determine the percentage of those who voted in the last election by the following age groups:

//1) 18-25 
//2) 26-35 
//3) 36-55

//Print to the console each group with it's corresponding voter turnout percentage in this format: 18-25: n%

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];


//separate into 3 arrays by age bracket: young, mid, old
//check how many in each age group/array voted
//div # by arr.length
//log 18-25, young%...

var youngGroup = [];
var midGroup = [];
var oldGroup = [];

for (var i = 0; i < voters.length; i++) {
    var thisVoter = voters[i];
    if (thisVoter.age >= 18 && thisVoter.age <= 25) {
        youngGroup.push(thisVoter);
    } else if (thisVoter.age >= 26 && thisVoter.age <= 35) {
        midGroup.push(thisVoter);
    } else if (thisVoter.age >= 36 && thisVoter.age <= 55) {
        oldGroup.push(thisVoter);
    }
};

function percVoted(arr) {
    var numVoted = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].voted === true) {
            numVoted++;
        } 
    } return (numVoted / arr.length) * 100;
}

console.log("18-25: " + percVoted(youngGroup) + "%");
console.log("18-25: " + percVoted(midGroup) + "%");
console.log("18-25: " + percVoted(oldGroup) + "%");