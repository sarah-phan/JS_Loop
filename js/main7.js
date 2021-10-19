function isPrime(){
    var number = document.getElementById("primeN").value;
    var printNumber = "";

    for (var i = 2; i <= number; i++){
        if (prime(i)){
            printNumber = printNumber + " " + i;
        }
        console.log(printNumber);
    }
    document.getElementById("txtPrime").innerHTML = printNumber;
}
function prime(number){
    for (var i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0){
            return false;
        }
    }
    return true;
}
document.getElementById("btnPrime").onclick = isPrime;