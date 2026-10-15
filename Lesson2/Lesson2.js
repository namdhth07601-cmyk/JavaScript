//chú thích
// const age = 25;
// console.log(age);
// const ten1 = '"Minh"';
// const ten2 = "'bao'";
// const ten3 = `Nam`;
// console.log(ten1, ten2, ten3);
// const String1 = "xin";
// const String2 = "chao";
// const String3 = "mn";
// console.log(String1 + String2 + String3); //nếu như này thì + " " để cách được
// console.log(`${String1} ${String2} ${String3}`); //có thể cách được trong chuỗi luôn
// biến: global scope(dùng để truy xuất ở bất cứ đâu) : var
//       block scope(chỉ có thể truy xuất trong cùng 1 block) : let, const

// { //khi ra ngoài để truy xuất thì chỉ gọi được a
// var a = 1;
// let b = 2;
// const c = 3;
// console.log(a);
// console.log(b);
// console.log(c);
// }
//nếu như một dòng lệnh bị lỗi thì sẽ ngừng thực thi ở dòng lệnh đấy

//Nếu boolean của mệnh đề trong if là true thì block code của if sẽ được thực thi
//giá trị nguyên thủy của boolean là false (0, "", NaN, -0, undefined, false, null)
// const a = 23;
// if(1){
//     console.log("bạn đã đủ tuổi")
// }
//     else{
//         console.log("bạn chưa đủ tuổi")
//     }

//     console.log(Boolean("1"))

// console.log(String(null));
//1 biến chỉ có thể lưu trữ 1 giá trị

//Bài tập: dùng prompt để nhập hai số hạng và toán tử, sau đó tính toán phép toán và in kết quả vào console
const soH1 = Number(prompt ("Hãy nhập số hạng 1")); //prompt mặc định dạng String
const soH2 = Number(prompt ("Hãy nhập số hạng 2"));
console.log(soH1);
console.log(soH2);
console.log(soH1 + soH2);
// console.log(soH1 * 1 + soH2 * 1); //cách khác vì có thể ngầm định 
//camelCase trong biến khai báo thì chữ cái đầu tiên của từ khóa đầu tiên sẽ viết thường, chữ cái đầu tiên của chữ cái còn lại vt hoa. VD: let hoVaTen