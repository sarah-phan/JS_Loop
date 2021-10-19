function createDiv(){
    // Biến chứa giá trị in ra thẻ div
    var content = "";
    for(var i = 1; i <= 10; i++){
        if(i % 2 == 0){
            content += "<div class='classRed'>div chẵn</div>"
        }
        else
            content += "<div class='classBlue'>div lẻ</div>"
    }
    document.getElementById("txtDiv").innerHTML = content;
}
document.getElementById("btnDiv").onclick = createDiv;