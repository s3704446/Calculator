function Plus(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = Number(a) + Number(b);
    document.getElementById("sum").innerHTML = Number(sum);
}

function Minus(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = Number(a) - Number(b);
    document.getElementById("sum").innerHTML = Number(sum);
}

function Multiply(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = Number(a) * Number(b);
    document.getElementById("sum").innerHTML = Number(sum);
}

function Divide(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = Number(a) / Number(b);
    document.getElementById("sum").innerHTML = Number(sum);
}

function Mod(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = Number(a) % Number(b);
    document.getElementById("sum").innerHTML = Number(sum);
}

function Pow(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var sum;
    sum = Number(a) ^ Number(b);
    document.getElementById("sum").innerHTML = Number(sum);
}

function Sqrt(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c, sum;
    sum = Math.sqrt(Number(a) * Number(b));
    document.getElementById("sum").innerHTML = Number(sum);
}

