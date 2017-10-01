//Find the frequency of all the letters in a given word or phrase, and print them to the console.

const charFreq = phrase => {
    const phraseArr = phrase.split("");
    const charCount = {};
    const frequency = phraseArr.forEach(function(i) {
        if (charCount[i] === undefined) {
            charCount[i] = 1
        } else {
            charCount[i]++;
        };
    }); return charCount;
};

console.log(charFreq("yankees!!"));