function factorial(n) {
    var total = 1;
    for (var i = n; n > 0; i--); {
        total = total *= i;
    }
    return total;
}

console.log(factorial(4));


function loop2(input, z) {
    return(this.input.split("").indexOf(z));
}

console.log(loop2(angel, g));