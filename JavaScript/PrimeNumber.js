var bigInt = require("big-integer");
function PrimeNumber(){
    var num;
    num = document.getElementById("PrimeNumber").value;
    var i = bigInt(1);
        while(i <= bigInt(num)){
            i = i.plus(2);
            if(bigInt(num).mod(i) == 0) {
                var a = bigInt(num).divide(i);
                if(a.isPrime() && i.isPrime()){
                    document.getElementById("sum").innerHTML = i + " and " + a;
                }
            }
        }
    
}