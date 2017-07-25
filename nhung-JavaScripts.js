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
function showvar() {
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
function showarea() {
    document.write('area=' +area);
    document.write("<br/>");
    document.write('width=' +width);
    document.write("<br/>");
    document.write('height=' +height);
}
