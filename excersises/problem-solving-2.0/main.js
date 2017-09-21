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


function didVote(voter) {
    return voter.voted;
};

var toddlers = voters.filter(function(voter) {
    return voter.age >= 18 && voter.age <= 25;
});
var toddlersVoted = toddlers.filter(didVote).length;
var toddlerPercentage = toddlersVoted / toddlers.length * 100;


var mid = voters.filter(function(voter) {
    return voter.age >= 26 && voter.age <= 45;
});
var midVoted = mid.filter(didVote).length
var midPercentage = midVoted / mid.length * 100;


var top = voters.filter(function(voter) {
    return voter.age >= 36 && voter.age <= 55;
});
var topVoted = top.filter(didVote).length
var topPercentage = topVoted / top.length * 100;


console.log("Age 18-25:", toddlerPercentage + "%\n" + "Age 6-35:", midPercentage + "%\n" + "Age 36-55:", topPercentage + "%");

//Extra Credit: use .reduce