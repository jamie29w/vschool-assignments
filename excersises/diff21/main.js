// Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.

//var diff21 = function(n){
//    var x = (n - 21);
//    if (x < 0) {
//        return (x * -1);
//    } else if
//        (n > 21) {
//            return (x * 2)
//    } else if
//        (n = 21) {
//            return 0
//    }
//    
//}

//console.log(diff21(21));

var diff21 = function(n){
    if (n > 21) {
        return Math.abs(2*(n-21));
    } else {
        return Math.abs(n-21);
    }
}

console.log(diff21(5));