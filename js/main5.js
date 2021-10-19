function factorial(){
    var sum = 1;
    var n = document.getElementById("factorialN").value;
    for (var i = 1; i <= n; i++){
        sum = sum*i;
    }
    document.getElementById("txtFactorial").innerHTML = "Tổng = " + sum;
}
document.getElementById("btnFactorial").onclick = factorial;