var goombaPrice = parseInt(document.getElementById("goombaPrice").innerHTML);
var goombaCount = 0;
var goombaTotalCost = 0;

document.getElementById("goombaCount").addEventListener("input", function () {
    goombaCount = parseInt(document.getElementById("goombaCount").value);
    goombaTotalCost = (goombaPrice * goombaCount);
    document.getElementById("goombaTotal").innerHTML = goombaTotalCost;
});

var bobOmbPrice = parseInt(document.getElementById("bobOmbPrice").innerHTML);
var bobOmbCount = 0;
var bobOmbTotalCost = 0;

document.getElementById("bobOmbCount").addEventListener("input", function () {
    bobOmbCount = parseInt(document.getElementById("bobOmbCount").value);
    bobOmbTotalCost = (bobOmbPrice * bobOmbCount);
    document.getElementById("bobOmbTotal").innerHTML = bobOmbTotalCost;
});

var cheepCheepPrice = parseInt(document.getElementById("cheepCheepPrice").innerHTML);
cheepCheepCount = 0;
cheepCheepTotalCost = 0;

document.getElementById("cheepCheepCount").addEventListener("input", function () {
    var cheepCheepCount = parseInt(document.getElementById("cheepCheepCount").value);
    var cheepCheepTotalCost = (cheepCheepPrice * cheepCheepCount);
    document.getElementById("cheepCheepTotal").innerHTML = cheepCheepTotalCost;
});

document.getElementById("cheepCheepCount").addEventListener("input", function () {
    var grandTotalCost = (goombaTotalCost + bobOmbTotalCost + cheepCheepTotalCost);
    document.getElementById("grandTotalCost").innerHTML = grandTotalCost
});

    
    

//document.getElementById("calculate").addEventListener("click", function () {
//    var goombaCount = parseInt(document.getElementById("goombaCount").value);
//    var goombaTotal = (goombaPrice * goombaCount);
//    document.getElementById("goombaTotal").innerHTML = goombaTotal;
//})










