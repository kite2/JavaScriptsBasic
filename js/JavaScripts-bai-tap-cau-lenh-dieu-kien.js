/**
 * Created by Ha on 7/26/2017.
 */
function dongY() {
    alert("Lựa chọn đúng đấy")
}

function khong() {
    var x = Math.random()*100;
    var y = Math.random()*200;
    document.getElementById("btkhong").style.top = y+"px";
    document.getElementById("btkhong").style.left = x+"px";
}
var auto=['','T','i','n',' ','N','g','ư','ờ','i',' ','T','h','ế','!','!','!'];
var coBan ='';
function tuDongGo() {
    var textCoBan = document.getElementById('autoText').value;
    var doDaiTextCoBan = textCoBan.length;
    var doDaiAuto = auto.length;
    if (doDaiTextCoBan > 0){
        for (var i=1; i<=doDaiTextCoBan;i++){
            coBan = coBan+auto[i];
            if (i === doDaiAuto){
                document.getElementById('autoText').value='';
                coBan='';
            }
        }
    }
    document.getElementById('autoText').value = coBan;
    coBan ="";
    setTimeout('tuDongGo()',2);
    //document.getElementById('autoText').value = "Tin người vkl";
}

function tinhSoNgay() {
    var thang = parseInt(document.getElementById('nhapThang').value);
    switch (thang){
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12:
            document.getElementById('inSoNgay').innerHTML="Tháng có 31 Ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('inSoNgay').innerHTML="Tháng này có 30 Ngày";
            break;
        case 2:
            document.getElementById('inSoNgay').innerHTML="Tháng này có 28 hoặc 29 ngày";
            break;
        default:
            document.getElementById('inSoNgay').innerHTML="Không phải tháng trong năm";
            break;
    }
}

var hinh1= 1;
var hinh2= 2;
var hinh3= 3;

function chuyenHinh1() {
    if (document.getElementById('img1').getAttribute("src")=="../img/anh-ghep-1.jpg"){
        document.getElementById('img1').src="../img/anh-ghep-2.jpg";
        hinh1 = 2;
    } else if (document.getElementById('img1').getAttribute('src')=="../img/anh-ghep-2.jpg"){
        document.getElementById('img1').src="../img/anh-ghep-3.jpg";
        hinh1 = 3;
    } else {
        document.getElementById('img1').src="../img/anh-ghep-1.jpg";
        hinh1 = 1;
    }

    if (hinh1 == hinh2 && hinh2 == hinh3) {
        document.getElementById('bang').style.backgroundColor="red"
    } else {
        document.getElementById('bang').style.backgroundColor="white"
    }
}
function chuyenHinh2() {
    if (document.getElementById('img2').getAttribute("src")=="../img/anh-ghep-1.jpg"){
        document.getElementById('img2').src="../img/anh-ghep-2.jpg";
        hinh2 = 2;
    } else if (document.getElementById('img2').getAttribute('src')=="../img/anh-ghep-2.jpg"){
        document.getElementById('img2').src="../img/anh-ghep-3.jpg";
        hinh2 = 3;
    } else {
        document.getElementById('img2').src="../img/anh-ghep-1.jpg";
        hinh2 = 1;
    }

    if (hinh1 == hinh2 && hinh2 == hinh3) {
        document.getElementById('bang').style.backgroundColor="red"
    } else {
        document.getElementById('bang').style.backgroundColor="white"
    }
}
function chuyenHinh3() {
    if (document.getElementById('img3').getAttribute("src")=="../img/anh-ghep-1.jpg"){
        document.getElementById('img3').src="../img/anh-ghep-2.jpg";
        hinh3 = 2;
    } else if (document.getElementById('img3').getAttribute('src')=="../img/anh-ghep-2.jpg"){
        document.getElementById('img3').src="../img/anh-ghep-3.jpg";
        hinh3 = 3;
    } else {
        document.getElementById('img3').src="../img/anh-ghep-1.jpg";
        hinh3 = 1;
    }

    if (hinh1 == hinh2 && hinh2 == hinh3) {
        document.getElementById('bang').style.backgroundColor="red"
    } else {
        document.getElementById('bang').style.backgroundColor="white"
    }
}
