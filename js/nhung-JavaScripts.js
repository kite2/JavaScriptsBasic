/**
 * Created by Ha on 7/25/2017.
 */
function showMessage() {
    alert('Chao xìn');
}
function showMessages() {
    document.getElementById('messageDiv').innerHTML='Hello';
}
function showMessage1() {
    document.write('Hello World!');
}
function showMessage2() {
    console.log('Hello World!');
}
var i = 10;
var f = 20.5;
var b = true;
var s = "Ha Noi";
function showVar() {
    document.write('i=' +i);
    document.write("<br/>");
    document.write('f=' +f);
    document.write("<br/>");
    document.write('b=' +b);
    document.write("<br/>");
    document.write('s=' +s);
}
var width = 20;
var height = 10;
var area = width * height;
function showArea() {
    document.write('area=' +area);
    document.write("<br/>");
    document.write('width=' +width);
    document.write("<br/>");
    document.write('height=' +height);
}
function phepChiaDu() {
    var a = prompt("Nhập số thứ 1 vào");
    var b = prompt("Nhập số thứ 2 vào");
    alert("a chia b có dư là" +' '+a%b)
}

function chuyenTien() {
    var amount= document.getElementById('amount').value;
    var fromCurrency= document.getElementById('fCurrency').value;
    var toCurrency= document.getElementById('tCurrency').value;
    var inTien= amount*toCurrency;
    document.getElementById('tienchuyen').innerHTML = inTien;
}


function phepCong() {
    var soThu1= parseInt(document.getElementById('soThu1').value);
    var soThu2= parseInt(document.getElementById('soThu2').value);
    var ketQua;
    ketQua = soThu1 + soThu2;
    document.getElementById('inKetQua').innerHTML="Result Addition: "+ ketQua;
}

function phepTru() {
    var soThu1= parseInt(document.getElementById('soThu1').value);
    var soThu2= parseInt(document.getElementById('soThu2').value);
    var ketQua;
    ketQua = soThu1 - soThu2;
    document.getElementById('inKetQua').innerHTML="Result Subtraction: "+ ketQua;
}

function phepChiaHet() {
    var soThu1= parseInt(document.getElementById('soThu1').value);
    var soThu2= parseInt(document.getElementById('soThu2').value);
    var ketQua;
    ketQua = soThu1 / soThu2;
    document.getElementById('inKetQua').innerHTML="Result Division: "+ ketQua;
}

function phepNhan() {
    var soThu1= parseInt(document.getElementById('soThu1').value);
    var soThu2= parseInt(document.getElementById('soThu2').value);
    var ketQua;
    ketQua = soThu1 * soThu2;
    document.getElementById('inKetQua').innerHTML="Result Multiplication: "+ ketQua;
}

function ngon() {
    var ngon = document.getElementById('ngon');
    var bo = document.getElementById('bo');
    var re = document.getElementById('re');
    if (ngon.checked==true){
        if (bo.checked==true){
            if (re.checked==true){
                document.getElementById('bo').checked = false;
            }
        }
    }
}
function bo() {
    var ngon = document.getElementById('ngon');
    var bo = document.getElementById('bo');
    var re = document.getElementById('re');
    if (bo.checked == true) {
        if (re.checked == true) {
            if (ngon.checked == true) {
                document.getElementById('re').checked = false;
            }
        }
    }
}

function re() {
    var ngon = document.getElementById('ngon');
    var bo = document.getElementById('bo');
    var re = document.getElementById('re');
    if (re.checked == true) {
        if (ngon.checked == true) {
            if (bo.checked == true) {
                document.getElementById('ngon').checked = false;
            }
        }
    }
}