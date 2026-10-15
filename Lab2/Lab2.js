// Bài 1:
let a = 67;
if (a % 2 == 0){
    console.log("đay là số chẵn");
}
else
{
    console.log("đây là số lẻ");
}

// Bài 2:
let soKwh = 120;
if (soKwh <= 50){
    let tienDien = soKwh * 1800;
    console.log("Tiền điện phải trả là: " + tienDien);
}
else if (soKwh <= 100){
    let tienDien = 50 * 1800 + (soKwh - 50) * 2300;
    console.log("Tiền điện phải trả là: " + tienDien);
}
else{
    let tienDien = 50 * 1800 + 50 * 2300 + (soKwh - 100) * 3000;
    console.log("Tiền điện phải trả là: " + tienDien);
}

let tienDien = 910000;
if (tienDien <= 50 * 1800){
    soKwh = tienDien / 1800;
    console.log("Số Kwh đã sử dụng là: " + soKwh);
}
else if (tienDien <= 50 * 1800 + 50 * 2300){
    soKwh = 50 + (tienDien - 50 * 1800) / 2300;
    console.log("Số Kwh đã sử dụng là: " + soKwh);
}
else{
    soKwh = 100 + (tienDien - 50 * 1800 - 50 * 2300) / 3000;
    console.log("Số Kwh đã sử dụng là: " + soKwh);
}

// Bài 3:
let chucVu = "manager";
let ngayCong = 20;
const luongCoBan = 5000000;
const ngayCongQuyDinh = 24;

let heSo = 0;

switch (chucVu){
    case "intern":
        heSo = 1.0;
        break;
    case "staff":
        heSo = 1.5;
        break;
    case "senior":
        heSo = 2.0;
        break;
    case "manager":
        heSo = 3.0;
        break;
}

if(heSo > 0){
    let Luong = heSo * ngayCong * luongCoBan/ngayCongQuyDinh;
    console.log("Chức vụ:" + chucVu);
    console.log("Lương:" + luongCoBan.toLocaleString("vi-VN") + "đ");
}

//Bài 4:
for (let i = 2; i <=9 ; i++){
    console.log("Bảng cửu chương" + i);
    for (let j = 1; j <= 10; j++){
        console.log(i + "x" + j + "=" + (i * j));
    }
}

//Bài 5:
function isPrime(n){
    if(n < 2) return false;
    if(n === 2) return true;
    if(n % 2 ===0) return false;

    for (let i = 3; i <= Math.sqrt(n); i +=2){
        if (n % i === 0) return false;
    }

    return true;
}

let n = 17;

if (isPrime(n)){
    console.log(n + "là số nguyên tố");
} else {
    console.log(n + "không phải là số nguyên tố");
}

