const codePhrase = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pulldrinking the right vinegar fanny pack pull minim right chicharrones migas.";


function decipher(str) {
    var source = str.split(" ");
    var throwAway = [];
    var keepers = [];
    for (var i = 0; i < source.length; i++) {
        if (throwAway.indexOf(source[i]) === -1) {
            throwAway.push(source[i]);
        } else if (throwAway.indexOf(source[i]) !== -1 && keepers.indexOf(source[i]) === -1) {
            keepers.push(source[i]);
        }
    };
    return keepers;
};

//decipher = (str) => {
//    return str.split(" ").filter((word, i, array) => array.indexOf(word) !== array.lastIndexOf(word)).filter((item, i, array) => i === array.indexOf(item));
//;}

console.log(decipher(codePhrase));

module.exports = decipher;