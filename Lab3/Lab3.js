// Bài 1
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// Bài 2
function tinhtienDien(kwh) {
    let tienDien = 0;
    if (kwh <= 50) {
        tienDien = kwh * 1800;
    } else if (kwh <= 100) {
        tienDien = (50 * 1800) + ((kwh - 50) * 2300);
    } else {
        tienDien = (50 * 1800) + (50 * 2300) + ((kwh - 100) * 3000);
    }
    return tienDien;
}

function tinhsoKwh(sotien) {
    const tienBac1 = 50 * 1800;
    const tienBac2 = 50 * 2300;
    const Tongtienbac = tienBac1 + tienBac2;
    if (sotien <= tienBac1) {
        return sotien / 1800;
    } else if (sotien <= tienBac2) {
        return 50 + (sotien - tienBac1) / 2300;
    } else {
        return 100 + (sotien - Tongtienbac) / 3000;
    }
}

const sotien = 910000;
const soKwh = tinhsoKwh(sotien);
console.log(`Số điện sử dụng với tiền điện ${sotien.toLocaleString('vi-VN')}đ là: ${soKwh} kWh`);

// Bài 3
function tinhLuong(chucVu, Ngaycong) {
    const luongcoban = 5000000;
    const Ngaycongquydinh = 24;
    const hesoDict = {
        intern: 1.0,
        staff: 1.5,
        senior: 2.0,
        manager: 3.0,
    }
    const HeSo = hesoDict[chucVu.toLowerCase()] || 0;

    if (HeSo === 0) {
        console.log("Chức vụ không hợp lệ");
    }
    const Luong = (HeSo * Ngaycong * luongcoban) / Ngaycongquydinh;
    return Luong;
}
    console.log("Lương Staff (24 ngày công):", tinhLuong("staff", 24).toLocaleString('vi-VN'), "VNĐ");
    console.log("Lương Manager (20 ngày công):", tinhLuong("manager", 20).toLocaleString('vi-VN'), "VNĐ");

// Bài 4
function chuanHoaCau(cau) {
    if (!cau) return "";
    let result = cau.replace(/\s*([.?!])\s*/g, "$1 ");
    let words = result.trim().split(/\s+/);
    words = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    result = words.join(" ");
    result = result.replace(/\s+([.?!])/g, "$1");

    return result;
}
const input = " xin chao cac ban. hom nay troi dep qua !toi di hoc ve ? ";
console.log("Output:", chuanHoaCau(input));

// Bài 5
function calculator(a, operator,b){
    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
        case 'x':
        case 'X':
            return a * b;
        case '/':
            return b !== 0? a / b : "lỗi không thể chia cho 0";
        case '%':
            return a % b;
        default:
            return "Toán tử không hợp lệ";
    }
}
console.log("15.5 x 2 =", calculator(15.5, 'x', 2));
console.log("10 / 2 =", calculator(10, '/', 2));

