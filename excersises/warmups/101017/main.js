//Given a string and a non-negative int n, we'll say that the "front" of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the "front"

//Use TDD (Test-driven development) in solving this problem.

//get first three chars of string
//for loop num1 times adding `front`
//EC: return `front` first time and ` front` all additional times

function nPeater (str, num1) {
    let front = str.slice(0,3);
    // let output = "";
    //
    // for (let i = 0; i < num1; i++) {
    //     output += front;
    // }
    // return output;
    return front.repeat(num1)
}

console.log(nPeater("blahblah", 5));

module.exports = nPeater;
