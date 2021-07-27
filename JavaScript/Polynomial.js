var bigInt = require("big-integer");

function modPow(){
    var b = document.getElementById("number1").value;
    var e = document.getElementById("number2").value;
    var n = document.getElementById("number3").value;
    var sum;
    sum = bigInt(b).modPow(bigInt(e), bigInt(n));
    document.getElementById("sum").innerHTML = bigInt(sum);
}

function modMultiply(){
    var b = document.getElementById("number1").value;
    var e = document.getElementById("number2").value;
    var n = document.getElementById("number3").value;
    var a, sum;
    a = bigInt(b).multiply(bigInt(e));
    sum = bigInt(a).mod(bigInt(n));
    document.getElementById("sum").innerHTML = bigInt(sum);
}