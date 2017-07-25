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
    document.write('f=' +f)
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
function phepChia() {
    var a = prompt("Nhập số thứ 1 vào");
    var b = prompt("Nhập số thứ 2 vào");
    alert("a chia b có dư là" +' '+a%b)
}

function chuyenTien() {
    var tien1= document.getElementById('form1').elements.item(0).value;
    var tien2= document.getElementById('form1').elements.item(1).value;
    var tien3= document.getElementById('form1').elements.item(2).value;
    var tien4= tien1*tien3;
    document.getElementById('tienchuyen').innerHTML = tien4;
}

