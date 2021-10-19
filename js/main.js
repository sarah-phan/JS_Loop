// Hàm dùng For
function sequenceFor(){
    // Biến số chẵn
    var even = 0;
    // Biến nối chuỗi số chẵn
    var printEven = " ";
    // Biến số lẻ
    var odd = 0;
    // Biến nối chuỗi số lẻ
    var printOdd = " ";

    for (var i = 0; i < 100; i++){
        if (i % 2 == 0){
            even += i;
            printEven = printEven + i + " ";
            console.log(even);      
        }
        if (i % 2 != 0){
            odd += i;
            printOdd = printOdd + i + " "; 
            console.log(odd);
        }
        document.getElementById("txtSequence").innerHTML = "<br/>" + "*Số chẵn " + printEven + "<br />" + "*Số lẻ " + printOdd; 
    }
}
document.getElementById("btnSequenceFor").onclick = sequenceFor;

// Hàm dùng While
function sequenceWhile(){
    var even = 0;
    var printEven = " ";
    var odd = 0;
    var printOdd = " ";

    var i = 0;
    while (i < 100){
        if(i % 2 == 0){
            even += i;
            printEven = printEven + i + " ";
        }
        if(i % 2 != 0){
            odd += i;
            printOdd = printOdd + i + " ";
        }
        i++;
        document.getElementById("txtSequence").innerHTML = "<br/>" + "*Số chẵn " + printEven + "<br />" + "*Số lẻ " + printOdd; 
    }
}
document.getElementById("btnSequenceWhile").onclick = sequenceWhile;