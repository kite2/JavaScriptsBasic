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
var soThuTu = 1;
var soThuTuDongXoa = 1;
function nhapSanPham() {

    var tenSanPham = document.getElementById('tenSanPham').value;
    var dongMoi = document.createElement("TR");
    dongMoi.setAttribute("id", soThuTu);
    document.getElementById("bangSanPham").appendChild(dongMoi);
    for (i = 0; i < 3; i++) {
        var cotMoi = document.createElement("TD");
        dongMoi.appendChild(cotMoi);
        if (i == 0) {
            var vietSoThuTu = document.createTextNode(soThuTu);
            cotMoi.appendChild(vietSoThuTu)
        }
        if (i == 1) {
            var vietTenSanPham = document.createTextNode(tenSanPham);
            cotMoi.appendChild(vietTenSanPham);
        }
        if (i == 2) {
            var taoNutXoa = document.createElement("INPUT")
            taoNutXoa.setAttribute("type","button");
            taoNutXoa.setAttribute("onclick", "xoa("+ soThuTuDongXoa +")");
            taoNutXoa.setAttribute("value", "Xóa");
            cotMoi.appendChild(taoNutXoa)
        }

    }
    soThuTu += 1;
    soThuTuDongXoa += 1;
}

function xoa(a) {
    for (i = 0; i < document.getElementById("bangSanPham").getElementsByTagName("TR").length;i++) {
        for (j = 0; j < 3 ; j++) {
            if (j == 0) {
                if (a == document.getElementById("bangSanPham")) {
                    var x = document.getElementById("bangSanPham");
                    x.deleteRow(i)
                }
            }
        }
    }
        soThuTuDongXoa -= 1;
        soThuTu -= 1;
        console.log("so thu tu dong xoa" + soThuTuDongXoa);
        console.log("danh dau xoa" + danhDauXoa);
}