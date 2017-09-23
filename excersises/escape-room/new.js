function generateRandomNumber(min, max){
    return Math.floor((Math.random() * max) + min);
}

console.log(generateRandomNumber(4,5));