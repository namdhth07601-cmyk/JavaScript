function validateForm(event) {
    const HoTen = document.getElementById("HoTen").value;
    const Email = document.getElementById("Email").value;
    const SDT = document.getElementById("SDT").value;
    if(HoTen.trim().length == "") {
        document.getElementById("errorHoTen").innerText = "Họ tên không được để trống họ tên";
        return false;
} 
if(!(Email.includes(".") && Email.includes("@"))) {
    document.getElementById("errorEmail").innerText = "Email không hợp lệ";
    return false;
}
if(SDT * 1 == NaN || SDT.trim().length < 10) {
    document.getElementById("errorSDT").innerText = "Số điện thoại không hợp lệ";
    return false;
}
if(HoTen.trim().length != "" && (Email.includes(".") && Email.includes("@")) && (SDT * 1 != NaN && SDT.trim().length >= 10)) {
    document.getElementById("errorHoTen").innerText = "";
    document.getElement
}
}

function tinhtien(){
    document.getElementById("giaSP").value =
    document.getElementById("loaHang").value;
    document.getElementById("thanhTien").value =
    document.getElementById("loaiHang").value *
    document.getElementById("soLuong").value;
}