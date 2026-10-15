const assest = 1000000000
if (assest >= 1000000000){
    console.log("You are a billionaire")
} else if (assest >= 1000000){
    console.log("You are a millionaire")
}
const month = prompt("Nhập tháng: ");
switch (month * 1) {
    case 1:
        console.log("Tháng này thuộc quý 1");
        break;
    case 2:
        console.log("Tháng này thuộc quý 1");
        break;
    case 3:
        console.log("Tháng này thuộc quý 1");
        break;
    case 4:
        console.log("Tháng này thuộc quý 2");
        break;
    case 5:
        console.log("Tháng này thuộc quý 2");
        break;
    case 6:
        console.log("Tháng này thuộc quý 2");
        break;
    case 7:
        console.log("Tháng này thuộc quý 3");
        break;
    case 8:
        console.log("Tháng này thuộc quý 3");
        break;
    case 9:
        console.log("Tháng này thuộc quý 3");
        break;
    case 10:
        console.log("Tháng này thuộc quý 4");
        break;
    case 11:
        console.log("Tháng này thuộc quý 4");
        break;
    case 12:
        console.log("Tháng này thuộc quý 4");
        break;
    default:
        console.log("Tháng không hợp lệ");
}
let i = 0;
for ( ; ;){
    console.log(i);
    i++;
}
let sinhVien = [
{ten: "Nguyen Van A",chuyenNganh: "CNTT"},
{ten: "Nguyen Van B",chuyenNganh: "CNTT"},
{ten: "Nguyen Van C",chuyenNganh: "CNTT"},
{ten: "Nguyen Van D",chuyenNganh: "CNTT"},
];
for (let {ten} of sinhVien){
    console.log(ten,);
}
console.log(sinhVien[0].ten);
const {ten, chuyenNganh} = sinhVien[0];
console.log(ten, chuyenNganh);
const arr = [0,1,2];
const data = {name :"Iphone 18 Pro Max 2TB", price: 1000000000, "/": "https:localhost:3000"};
console.log(data);
console.log
//không thực thi khi khai báo
function greet(){
    console.log("Hello");
}
greet();
console.log(a);

function greet(){
    a = 8;
    console.log(3 + 4);
}

greet();

const Tinhtong = () => {
    return 3 + 4;
};
console.log(Tinhtong());
tinhTong();

function tinhTong(a,b){
    console.log(a + b);
}
tinhTong(4,5);

function dangNhap(){
    const data = {name : "Nam"}
    callback(data);
}

function greet(data){
    alert(`Chào mừng ${data.name} đến với website`);
}
dangNhap(greet);