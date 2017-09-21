//Find the frequency of all the letters in a given word or phrase, and print them to the console.

var phrase = 'slimy smelly solution';
var phraseArr = phrase.split("");
var charCount = {};

phraseArr.forEach(function(char) {
    if (charCount[char] === undefined) {
    //can also be written as this    if (!charCount[char]) {
        charCount[char] = 1;
    } else {
        charCount[char]++;
    }
});

console.log(charCount);


//Extra Credit
//Also output the original string with all duplicate letters removed. (i.e. slimy eoutn)

console.log(Object.keys(charCount).join(""));
//keys pulls the keys of the object


//Extra Extra Credit
//Display the list of letters in sorted order by frequency.