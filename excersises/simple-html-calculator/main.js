var calc1Input1 = 0;
var calc1Input2 = 0;
var calc2Input1 = 0;
var calc2Input2 = 0;
var calc3Input1 = 0;
var calc3Input2 = 0;
var output1 = 0;
var output2 = 0;
var output3 = 0;

document.getElementById("button1").addEventListener("click", function() {
    calc1Input1 = parseInt(document.getElementById("calc1Input1").value);
    calc1Input2 = parseInt(document.getElementById("calc1Input2").value);
    output1 = (calc1Input1 + calc1Input2);
    document.getElementById("output1").innerHTML = output1;
});

document.getElementById("button2").addEventListener("click", function() {
    calc2Input1 = parseInt(document.getElementById("calc2Input1").value);
    calc2Input2 = parseInt(document.getElementById("calc2Input2").value);
    output2 = (calc2Input1 * calc2Input2);
    document.getElementById("output2").innerHTML = output2;
});

document.getElementById("button3").addEventListener("click", function() {
    calc3Input1 = parseInt(document.getElementById("calc3Input1").value);
    calc3Input2 = parseInt(document.getElementById("calc3Input2").value);
    output3 = (calc3Input1 / calc3Input2);
    document.getElementById("output3").innerHTML = output3;
});