const sinhVien = { name: "Minh", age: 27, "/": "https:/localhost3000" }; // .../- trường hợp đặc bt
console.log(sinhVien.name);
console.log(sinhVien["name"]); //dùng đc cho /
console.log(sinhVien["/"]);

//Mảng
// const arr = [1, 2, 3, 4, 5];
// const arr1 = [1, 2, 3, 4, 5, 6];
// arr.forEach((a, b, c) => {
//   //hàm mũi tên, a : phần tử mảng đang lặp đến, b: index, c: mảng
//   console.log(a, b, c);
// });
// arr.splice(arr.length, 0, 6); //overl: thêm bao nhiêu phần tử tùy thích //o dau, sl xoa?, mot so bat ki
// arr.splice(arr.length - 1, 1); //xóa
// arr.splice(0, 0, -1); //thêm vào đầu
// arr.splice(0, 1); //xóa 1 pt
// console.log(arr);

// arr.splice(-2, 2);
// console.log(arr);

// console.log(arr.slice(1, 3));

const students = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
    gender: "Nam",
    className: "SD2001",
    score: 8.5,
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    age: 21,
    gender: "Nữ",
    className: "SD2002",
    score: 7.8,
  },
  {
    id: 3,
    name: "Lê Minh Đức",
    age: 20,
    gender: "Nam",
    className: "SD2001",
    score: 9.2,
  },
];
//Dựa trên điểm của sinh viên
// console.log(...arr, ...arr1); //ghép mảng

// console.log(
//   students.map((student) => {
//     if (student.score >= 8) {
//       return { ...student, danhHieu: "Học sinh giỏi" };
//     } else if (student.score >= 6) {
//       return { ...student, danhHieu: "Học sinh khá" };
//     } else {
//       return { ...student, danhHieu: "Không xếp hạng" };
//     }
//   }),
// );

//đầu ra là phần tử của mảng

const arr = [75, 346, 243, 778, 34, 56];
const arr1 = ["X", "V", "A", "B", "bsdv"];
const arr2 = [...arr, ...arr1];
console.log(
  arr.sort((a, b) => {
    return a - b;
  }),
); //sort mảng số từ bé đến lớn