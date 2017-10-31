// Today we are going to be building a function that removes all vowels
// and spaces from a string. It will then return the result as an object with
// two keys "str" and "vowels".
//
// Input:
// "Pickle Rick!"
//
// Output:
// {
//   str: "pckrck!",
//   vowels: "iei"
// }

disemvowel = input => {
    let output = {
        str: "",
        vowels: ""
    };
    let vowels = "aeiou";
    for (let i = 0; i < input.length; i++) {
        if (vowels.includes(input[i])) {
            output.vowels += input[i];
        } else if (input[i] === " ") {
            continue;
        } else output.str += input[i];
    }
    return output;
};

module.exports = disemvowel;

console.log(disemvowel("test"));

//super cool regex solution:
// function disemvowel(str){
//   newObj = {}
//   const noVowels = str.replace(/[aeiou\s/]/gi,'');
//   const vowels = str.replace(/[^aeiou]/gi, '');
//   newObj.str = noVowels.toLowerCase();
//   newObj.vowels = vowels.toLowerCase();
//   console.log(newObj)
// }
//
// disemvowel("Pickle Rick!")
