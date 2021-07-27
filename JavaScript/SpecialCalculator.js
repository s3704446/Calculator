function PI(){
    var a = document.getElementById("SpecialCalculator").value;
    var sum;
    sum = Math.PI * Number(a);
    document.getElementById("sum").innerHTML = Number(sum);
}

function Sin(){
    var a = document.getElementById("SpecialCalculator").value;
    var sum;
    sum = Math.sin(Number(a));
    document.getElementById("sum").innerHTML = Number(sum);
}

function Cos(){
    var a = document.getElementById("SpecialCalculator").value;
    var sum;
    sum = Math.cos(Number(a));
    document.getElementById("sum").innerHTML = Number(sum);
}

function Tan(){
    var a = document.getElementById("SpecialCalculator").value;
    var sum;
    sum = Math.tan(Number(a));
    document.getElementById("sum").innerHTML = Number(sum);
}

function Log(){
    var a = document.getElementById("SpecialCalculator").value;
    var sum;
    sum = Math.log(Number(a));
    document.getElementById("sum").innerHTML = Number(sum);
}

function Sqrt(){
    var a = document.getElementById("SpecialCalculator").value;
    var sum;
    sum = Math.sqrt(Number(a));
    document.getElementById("sum").innerHTML = Number(sum);
}

function Exp(){
    var a = document.getElementById("SpecialCalculator").value;
    var sum;
    sum = Math.exp(Number(a));
    document.getElementById("sum").innerHTML = Number(sum);
}