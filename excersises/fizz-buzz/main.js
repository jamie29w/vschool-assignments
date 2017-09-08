//for (var i = 1; i <= 20; i++) {
//    if (i % 3 === 0) {
//        console.log("fizz");
//    } else {
//        console.log(i);
//    }
//}

for (var i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log("fizz");
    } else if 
        (i % 5 === 0 && i % 3 !== 0) {
            console.log("buzz");
    } else if 
        (i % 3 === 0 && i % 5 === 0) {
            console.log("fizz buzz");
    } else
        console.log(i);
}