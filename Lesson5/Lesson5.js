// const checkNumber = isNaN("7");
// console.log(checkNumber);
// //Kiểm tra xem người dùng nhập từ nào vào hàm prompt có phải
// const phoneNumber = prompt ("Xin hãy nhập số điện thoại");
// const arr = [1,2,3,4,5];
// console.log(Math.max)

const numbers = [1,3,5,7,9,99,199,200,400,500,1234,789,455];
const indexOfLowest = numbers.indexOf(Math.min(...numbers));
numbers.splice(indexOfLowest,1);
console.log(numbers);
console.log(indexOfLowest);


const xucxac1 = Math.ceil(Math.random())*6;
const xucxac2 = Math.ceil(Math.random())*6;
const xucxac3 = Math.ceil(Math.random())*6;
const datCuoc = prompt("Xin hãy nhập cửa đặt cược")
if(datCuoc =="xỉu" && xucxac1+xucxac2+xucxac3<10){
    console.log(`${xucxac1} ${xucxac2} ${xucXac3}";${xucxac1+xucxac2+xucxac3}: diem,thắng`)
}else if(datCuoc =="tài" && xucxac1+xucxac2+xucxac3>=10){
    console.log(`${xucxac1} ${xucxac2} ${xucXac3}";${xucxac1+xucxac2+xucxac3}: diem,thắng`)
}else{
    console.log("bạn thua rồi")
}