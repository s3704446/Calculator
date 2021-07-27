var bigInt = require("big-integer");
function BigNumPlus(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = bigInt(a).plus(bigInt(b));
    document.getElementById("sum").innerHTML = bigInt(sum);
}

function BigNumMinus(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = bigInt(a).minus(bigInt(b));
    document.getElementById("sum").innerHTML = bigInt(sum);
}

function BigNumMultiply(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = bigInt(a).multiply(bigInt(b));
    document.getElementById("sum").innerHTML = bigInt(sum);
}

function BigNumDivide(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = bigInt(a).divide(bigInt(b));
    document.getElementById("sum").innerHTML = bigInt(sum);
}

function BigNumMod(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = bigInt(a).mod(bigInt(b));
    document.getElementById("sum").innerHTML = bigInt(sum);
}

function BigNumPow(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = bigInt(a).pow(bigInt(b));
    document.getElementById("sum").innerHTML = bigInt(sum);
}

function BigNumNeg(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = bigInt(a).modPow(bigInt("-1"), bigInt(b));
    document.getElementById("sum").innerHTML = bigInt(sum);
}

function BigNumGCD(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = bigInt.gcd(bigInt(a), bigInt(b));
    document.getElementById("sum").innerHTML = bigInt(sum);
}

function BigNumLCM(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = bigInt.lcm(bigInt(a), bigInt(b));
    document.getElementById("sum").innerHTML = bigInt(sum);
}