function smallest(){
    var sum = 0;
    for (var i = 1; i < 1000; i++){
        sum += i;
        if (sum > 10000){
            break;
        }
        console.log(i);
    }
    document.getElementById("txtSmallest").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
}
document.getElementById("btnSmallest").onclick = smallest;