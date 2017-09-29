var ask = require('readline-sync');

var dictionary = {};

while (wordResponse !== "exit please" || defResponse !== "exit please") {
    var wordResponse = ask.question("What word would you like to look up?");
    wordResponse = wordResponse.toLowerCase();

    if (dictionary[wordResponse]) {
        console.log("the definition of '" + wordResponse + "' is: '" + dictionary[wordResponse] + "'.");
    } else {
        var definitionResponse = ask.question("What's the definition of '" + wordResponse + "'?");
        definitionResponse = definitionResponse.toLowerCase();
        dictionary[wordResponse] = definitionResponse;
    };
};