// Hàm dùng For
function divisibleFor(){
    var count = 0;

    for (var i = 0; i < 1000; i++){
        if (i % 3 == 0){
            count += 1;
            console.log(count);     
        }
    }
    document.getElementById("txtDivisible").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số"; 
}
document.getElementById("btnDivisibleFor").onclick = divisibleFor;

// Hàm dùng While
function divisibleWhile(){
    var count = 0;
    var i = 0; 
    while (i < 1000){
        if (i % 3 == 0){
            count += 1;
            console.log(count);     
        }
        i++;
    }
    document.getElementById("txtDivisible").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";  
}
document.getElementById("btnDivisibleWhile").onclick = divisibleWhile;