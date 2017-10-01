//REDUCE FUNCTIONS:


//Turn an array of numbers into a total of all the numbers

const array1 = [1, 2, 3, 4]

function total(arr) {
    let totalArr = arr.reduce(function(prev, currNum) {
            return prev + currNum;
        });
    return totalArr;
}

console.log(total(array1));


//Turn an array of numbers into a long string of all those numbers.
//function stringConcat(arr) {
//    let string = arr.reduce(function(prev, currChar) {
//        if (typeof prev === "number") {
//            prev = prev.toString();
//        }
//        return prev += currChar;
//    }); return string;
//};
//
//console.log(stringConcat(array1));



function stringConcat(arr) {
    let string = arr.reduce(function(prev, currChar) {
//        if (typeof prev === "number") {
//            prev = prev.toString();
//        }
        return prev += currChar;
    }, ""); return string;
};

console.log(stringConcat(array1));



//Turn an array of voter objects into a count of how many people voted

const voters = [  
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

function totalVotes(arr) {
    didVote = 0;
    let voted = arr.reduce(function(results, currVoter) {
        return currVoter.voted ? results + 1 : results;
//        ternary in place of if/else statement:
//        if (currVoter.voted) {
//            runningTotal + 1;
//        } else {
//            return results;
//        };
         
    }, 0); return voted;
};

console.log(totalVotes(voters)); //7


//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Golden fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(arr) {
    let totalCost = arr.reduce(function(runningTotal, currItem) {
        return runningTotal + currItem.price;
    }, 0);
    return totalCost;
};

console.log(shoppingSpree(wishlist)); // 227005  


//Given an array of arrays, flatten them into a single array

const array5 = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten(arr) {
    let newArr = arr.reduce(function(curr, nextArr) {
        return curr.concat(nextArr);
    }, []);
    return newArr;
};

//console.log(flatten(array5)) // ["1", "2", "3", true, 4, 5, 6];  



//Given an array of arrays (possibly with arrays), flatten them into a single array

const array52 = [  
    ["1", "2", "3", [7, 8, 9]],
    [true],
    [4, 5, 6]
];

function flatten(arr) {
    let newArr = arr.reduce(function(curr, nextArr) {
        if (!Array.isArray(nextArr)) {
            return curr;
        }
        return curr.concat(nextArr);
    }, []);
    return newArr;
};

//console.log(flatten(array52)) // ["1", "2", "3", 7, 8, 9, true, 4, 5, 6];  


//Given an array of voters, return an object representing the results of the vote, including how many of the voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges voted.

const voters = [  
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

function voterResults(arr) {
    let obj = {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0 
    };
    return arr.reduce(function(runningResults, nextPerson) {
        if (nextPerson.age >= 18 && nextPerson.age <= 25) {
            runningResults.youth++;
            if (nextPerson.voted) {
                runningResults.youngVotes++;
            }
        } else if (nextPerson.age >= 26 && nextPerson.age <= 35) {
            runningResults.mids++;
            if (nextPerson.voted) {
                runningResults.midVotes++;
            }
        } else if (nextPerson.age >= 36 && nextPerson.age <= 55) {
            runningResults.olds++;
            if (nextPerson.voted) {
                runningResults.oldVotes++;
            }
        }
        return runningResults;
    }, obj)
}

console.log(voterResults(voters)); // Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/