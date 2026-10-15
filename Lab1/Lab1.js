// Bài 1:

let studentID = "TH07601";
let studentName = "Đào Hữu Nam";
let dateOfBirth = "20/04/2009";
let placeOfBirth = "Hà Nội";
let major = "Công nghệ thông tin";
console.log(studentID);
console.log(studentName);
console.log(dateOfBirth);
console.log(placeOfBirth);
console.log(major);

//Bài 2:
let salary = 1000.5; 
// Kiểu: number(Số)
// Chỉ sử dụng cho các giá trị là số, không sử dụng cho các giá trị khác
var isActive = true; 
// Kiểu: boolean(đúng/sai)
// Không để "true" hoặc "false" vì sẽ bị hiểu là String
let nothing = null; 
// Kiểu: Null
// Tránh lỗi khi cố ý gán giá trị rỗng/không có giá trị.
const notDefined = undefined; 
// Kiểu: undefined
// chưa có giá trị được gán.

//Bài 3:
console.log("10" + 5); 
// không như mong đợi vì 10 là String và 5 là number nên sẽ bị ép kiểu sang String và nối chuỗi lại với nhau
// Cách viêt đúng:
console.log(Number("10") + 5);
console.log("10" - 5); 
// không như mong đợi vì 10 là String và 5 là number nên sẽ bị ép kiểu sang number và thực hiện phép trừ
// Cách viết đúng:
console.log(Number("10") - 5);
console.log(Number("10"));
console.log(String (123));
console.log(Boolean(""));
console.log(+"123");