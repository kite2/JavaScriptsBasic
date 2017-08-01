/**
 * Created by Ha on 7/31/2017.
 */
function taoBang() {
    for (i=2;i<=9;i++){
        var taoDong = document.createElement("TR");
        document.getElementById("bangCuuChuong").appendChild(taoDong);
        for (j=1;j<=9;j++){
            var taoCot = document.createElement("TD");
            var noiDung = document.createTextNode(i + " "  + "x "  + j + "= "  + i * j);
            taoCot.appendChild(noiDung);
            taoDong.appendChild(taoCot);
        }
    }
}

function dich() {
    var tu = document.getElementById('tuKhoa').value;
    var mangEng = ['for','have','eat','not'];
    var mangVie = ['cho','có','ăn','không'];
    var tuDaDich;
    for (i=0;i<mangEng.length;i++){
        if (tu == mangEng[i]){
            tuDaDich=mangVie[i];
            break;
        } else {
            tuDaDich=0 ;
        }
    }
    if (tuDaDich==0){
        alert("Không có")
    }else {
    document.getElementById('daDich').innerHTML=tuDaDich;
    }
}

function kiemTra() {
    for( count = 0; count <= 5; count++ ){ }
    document.getElementById('ketQua').innerHTML = count;
}