var input = ("slipper flipper blipper");

function finder(blah) {
    var keptLetters = [];
    var misfitLetters = [];
    for (var i = 0; i < blah.length; i++) {
        if (keptLetters.indexOf(blah[i]) === -1) {
            keptLetters.push(blah[i])
        } else {
            misfitLetters.push(blah[i]);
        }
    }
    return {
    keptLetters: keptLetters.join(", "),
    misfitLetters: misfitLetters.join(", ")
    }
}

console.log(finder(input));