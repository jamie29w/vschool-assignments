function isPalindrome(string) {
    var alphaArr = "abcdefghijklmnopqrstuvwxyz";
    var newArr = [];
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        if (alphaArr.indexOf(string[i]) !== -1) {
            newArr.push(string[i]);
        };
    }
    for (var j = 0; j < (newArr.length / 2); j++) {
        console.log(newArr[j], newArr[newArr.length - j - 1])
        if (newArr[j] !== newArr[newArr.length - j - 1]) {
            return false;
        };
    };
    return true;
};

module.exports = {
    isPalindrome: isPalindrome
};
