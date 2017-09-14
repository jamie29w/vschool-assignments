//You have just been called into a technical interview at some large, evil corporation. They want you to remove all the duplicate letters from a string. But you decide to only partially comply with their wishes. You create one string that has no duplicate letters, and another with all the letters that were removed because they were duplicates.

var input = ("slipper flipper blipper");

function finder(blah) {
    var unicorns = [];
    var misfits = [];
    for (var i = 0; i < blah.length; i++) {
        if (unicorns.indexOf(blah[i]) === -1) {
            unicorns.push(blah[i])
        } else {
            misfits.push(blah[i]);
        }
    }
    return {
    unicorns: unicorns.join(", "),
    misfits: misfits.join(", ")
    }
}

console.log(finder(input));

//alt

//function findDups(str) {
//    var unique = "";
//    var common = "";
//    for (var i = 0; i < str.length; i++) {
//        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
//            unique += str[i];
//        } else {
//            common += str[i];
//        }
//    }
//    return {
//        unique,
//        common
//    }
//}
//console.log(findDups("racecar"));
