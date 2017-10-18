// Today we will be building an app to play the games of three's.
// Here's how you play:
// Generate a random number.
// If the number is divisible 3, divide it by 3
// If it's not, either add 1 or subtract 1 (to make it divisible by 3),
// then divide it by 3
// Repeat this process until you reach "1"

function shrink(num) {
    let count = 0;
    while (num !== 1) {
        if (num % 3 === 0) {
            num = num / 3;
            count++;
        } else if ((num + 1) % 3 === 0) {
            num = (num + 1) / 3;
            count++;
        } else if ((num - 1) % 3 === 0) {
            num = (num - 1) / 3;
            count++;
        }
    }
    return count;
}

console.log(shrink(12));

module.exports = shrink;
