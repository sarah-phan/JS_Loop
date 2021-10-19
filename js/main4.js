function summation(){
    var sum = 0;
    var x = document.getElementById("numberX").value;
    var n = document.getElementById("numberN").value;
    console.log (x,n);
    for (var i = 1; i <= n; i++){
        sum += Math.pow(x,i);
        console.log(sum);
    }
    document.getElementById("txtPow").innerHTML = "Tổng = " + sum;
}
document.getElementById("btnPow").onclick = summation;