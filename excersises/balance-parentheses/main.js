//parenth order and balance checker:
const parenthChecker = (str) => {
    let strArr = [...str];
    while (strArr.length > 0) {
        let openParenthIndex = strArr.indexOf("(");
        let closeParenthIndex = strArr.indexOf(")");
        // console.log(`pre check/slice strArr: ${strArr}`)
        if (openParenthIndex === -1 && closeParenthIndex === -1) {
            return true
        } else if (openParenthIndex === -1 && closeParenthIndex !== -1) {
            return false
        } else if (openParenthIndex !== -1 && closeParenthIndex === -1) {
            return false
        } else if (closeParenthIndex < openParenthIndex) {
            return false
        } else if ( openParenthIndex !== -1 && closeParenthIndex !== -1) {
            // console.log(`index of ( ${openParenthIndex}, index of ) ${closeParenthIndex}`)
            strArr.splice (openParenthIndex, 1);
            // console.log(`first splice result: ${strArr}`)
            strArr.splice (closeParenthIndex - 1, 1);
            // console.log(`second splice result: ${strArr}`)
        }
    } return true
};


// alt solution:
// const parenthChecker = (str) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "(") {
//             count++;
//         } else if(str[i] === ")") {
//             count--;
//             if (count < 0) {
//                 return false;
//             }
//         }
//     }
//     return count === 0;
// }


console.log(parenthChecker("(tpm(m)()y)()()()()()()()(()"))


module.exports = parenthChecker
