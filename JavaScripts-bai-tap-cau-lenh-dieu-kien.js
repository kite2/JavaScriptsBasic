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
var auto=['','T','i','n',' ','N','g','ư','ờ','i',' ','v','k','l'];
var coBan ='';
function tuDongGo() {
    var textCoBan = document.getElementById('autoText').value;
    var doDaiTextCoBan = textCoBan.length;
    if (doDaiTextCoBan > 0){
        for (var i=1; i<=doDaiTextCoBan;i++){
            coBan = coBan+auto[i];
            if (i==14){
                document.getElementById('autoText').value='';
                coBan='';
            }
        }
    }
    document.getElementById('autoText').value = coBan;
    coBan ="";
    setTimeout('tuDongGo()',1);
    //document.getElementById('autoText').value = "Tin người vkl";
}