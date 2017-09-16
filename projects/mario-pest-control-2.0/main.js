//goomba
var goombaPrice = parseInt(document.getElementById("goombaPrice").innerHTML);
var goombaCount = 0;
var goombaCost = 0;

document.getElementById("goombaCount").addEventListener("input", function() {
    goombaCount = parseInt(document.getElementById("goombaCount").value);
    goombaCost = (goombaCount * goombaPrice);
    document.getElementById("goombaCost").innerHTML = goombaCost;
});

//bobOmb
var bobOmbPrice = parseInt(document.getElementById("bobOmbPrice").innerHTML);
var bobOmbCount = 0;
var bobOmbCost = 0;

document.getElementById("bobOmbCount").addEventListener("input", function() {
    bobOmbCount = parseInt(document.getElementById("bobOmbCount").value);
    bobOmbCost = (bobOmbCount * bobOmbPrice);
    document.getElementById("bobOmbCost").innerHTML = bobOmbCost;
});

//cheepCheep
var cheepCheepPrice = parseInt(document.getElementById("cheepCheepPrice").innerHTML);
var cheepCheepCount = 0;
var cheepCheepCost = 0;

document.getElementById("cheepCheepCount").addEventListener("input", function() {
    cheepCheepCount = parseInt(document.getElementById("cheepCheepCount").value);
    cheepCheepCost = (cheepCheepCount * cheepCheepPrice);
    document.getElementById("cheepCheepCost").innerHTML = cheepCheepCost;
});


//grandTotalCost
var grandTotalCost = 0;

document.getElementById("tabBtn").addEventListener("click", function() {
    grandTotalCost = (goombaCost + bobOmbCost + cheepCheepCost);
    document.getElementById("grandTotalCost").innerHTML = grandTotalCost;
})