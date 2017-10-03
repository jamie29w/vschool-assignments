const validateIP = ip => {
    var array = ip.split(".");
    console.log(array);
    if (array.length !== 4) {
        return false;
    };
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 255 || array[i] < 0 || isNaN(Number(array[i]))) {
            return false;
        }
    };
    return true;
};

validateIP("123.456.789.023");


module.exports = validateIP;

//for multiple functions:
//module.exports = {
//    validateIP;
//};