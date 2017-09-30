//Find the frequency of all the letters in a given word or phrase, and print them to the console.

function charFreq(phrase) {
    var phraseArr = phrase.split("");
    var charCount = {};
    var frequency = phraseArr.forEach(function(i) {
        if (charCount[i] === undefined) {
            charCount[i] = 1
        } else {
            charCount[i]++;
        };
    }); return charCount;
};

console.log(charFreq("yankees!!"));