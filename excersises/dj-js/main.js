var square = document.getElementById("playSquare");

square.addEventListener("mouseover", function() {
//    console.log("you lousy mouser!!");
    square.style.backgroundColor = "blue";
});

square.addEventListener("mousedown", function() {
//    console.log("you clicked!");
    square.style.backgroundColor = "red";
});

square.addEventListener("mouseup", function() {
//    console.log("you let it go!");
    square.style.backgroundColor = "yellow";
    
});

square.addEventListener("dblclick", function() {
//    console.log("double double toil and trouble!!");
    square.style.backgroundColor = "green";
    
});

square.addEventListener("mouseout", function() {
//    console.log("you lousy mouser!!");
    square.style.backgroundColor = "orange";
});

//keyboard listeners:
document.addEventListener("keydown", function(event) {
    if (event.which === 66) {
        square.style.backgroundColor = "blue"
    } else if (event.which === 82) {
        square.style.backgroundColor = "red"
    } else if (event.which === 89) {
        square.style.backgroundColor = "yellow"
    } else if (event.which === 71) {
        square.style.backgroundColor = "green"
    } else if (event.which === 79) {
        square.style.backgroundColor = "orange"
    }
});