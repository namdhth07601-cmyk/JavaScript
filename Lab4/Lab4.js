// Bài 1
let shoppinglist = ["Trứng","Thịt","Rau"];
console.log("Số lượng mặt hàng ban đầu là",shoppinglist.length);
shoppinglist.push("Sữa");
shoppinglist.unshift("Bánh mì");
let removeItem = shoppinglist.pop();
console.log("Mặt hàng bị xóa ở cuối",removeItem);
console.log("Mặt hàng bị xóa ở hàng hai",shoppinglist[1]);

// Bài 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num%2 ===0);
console.log("đây là số chẵn",evenNumbers);
const doubleEvenNumbers = evenNumbers.map(num => num * 2);
console.log("đây là số chẵn sau khi nhân đôi",doubleEvenNumbers);

// Bài 3
const students = [
  { name: "An", score: 8.2 },
  { name: "Bình", score: 7.5 },
  { name: "Chi", score: 9.1 },
  { name: "Duy", score: 6.8 },
  { name: "Hà", score: 8.7 },
  { name: "Khánh", score: 5.9 },
  { name: "Lan", score: 7.8 },
  { name: "Minh", score: 9.4 },
  { name: "Ngọc", score: 6.5 },
  { name: "Quân", score: 8.0 }
];

const highscore = students.filter(student => student.score > 8);
console.log("Học sinh điểm trên 8",highscore);
const topStudent = students.reduce((max, students) => students.score > max.score ? students : max, students[0]);
console.log("Học sinh điểm cao nhất:", topStudent);
const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / students.length;
console.log("c) Điểm trung bình cả lớp:", averageScore.toFixed(2));
const studentNames = students.map(student => student.name);
console.log("d) Mảng tên học sinh:", studentNames);
const sortedStudents = [...students].sort((a, b) => b.score - a.score);
console.log("e) Danh sách học sinh điểm giảm dần:", sortedStudents);

// Bài 4
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 30 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 300 },
];
const softprd = [...products].sort((a,b) => a.price - b.price);
console.log("sản phẩm theo thứ tự tăng dần là",softprd);

// Bài 5
const inventory = [
    { name: "Áo thun", price: 150000, quantity: 10 },
    { name: "Quần Short", price: 200000, quantity: 0 },
    { name: "Giày Sneaker", price: 800000, quantity: 5 },
    { name: "Mũ bảo hiểm", price: 120000, quantity: 0 }
];

const out = inventory.filter(item => item.quantity === 0);
console.log("Sản phẩm đã hết hàng là ", out);
const totalinventory = inventory.reduce((total,item) => total + (item.price * item.quantity),0);
console.log("Tổng giá trị hàng tồn là",totalinventory);

// Bài 6
const names = [
    "Nguyễn Văn An", "Trần Minh Anh", "Lê Hoàng Nam", "Phạm Ngọc Mai",
    "Đỗ Đức Anh", "Vũ Thị Lan", "Hoàng Minh Đức", "Bùi Thu Trang",
    "Ngô Quang Huy", "Đặng Khánh Linh", "Nguyễn Thành Long", "Trần Thị Hương",
    "Lê Minh Quân", "Phạm Thu Hà", "Đỗ Hoàng Sơn", "Vũ Minh Khôi",
    "Hoàng Thùy Dương", "Bùi Đức Minh", "Ngô Hải Nam", "Đặng Phương Anh",
    "Nguyễn Tuấn Anh", "Trần Quốc Bảo", "Lê Thị Ngọc", "Phạm Văn Dũng",
    "Đỗ Minh Châu", "Vũ Quốc Khánh", "Hoàng Ngọc Anh", "Bùi Văn Nam",
    "Ngô Thị Mai", "Đặng Văn Hùng", "Nguyễn Hoàng Anh", "Trần Minh Hoàng",
    "Lê Thu Phương", "Phạm Quốc Việt", "Đỗ Thị Thanh", "Vũ Anh Tuấn",
    "Hoàng Văn Bình", "Bùi Ngọc Hà", "Ngô Minh Tâm", "Đặng Thị Hạnh",
    "Nguyễn Đức Thắng", "Trần Ngọc Linh", "Lê Quốc Huy", "Phạm Thị Hoa",
    "Đỗ Văn Thành", "Vũ Thị Thu", "Hoàng Quốc Anh", "Bùi Minh Tuấn",
    "Ngô Thị Huyền", "Đặng Minh Khang", "Nguyễn Văn Khải", "Trần Thị Minh",
    "Lê Đức Anh", "Phạm Hoàng Long", "Đỗ Ngọc Lan", "Vũ Quang Minh",
    "Hoàng Thị Vân", "Bùi Quốc Duy", "Ngô Minh Anh", "Đặng Thùy Linh",
    "Nguyễn Quốc Trung", "Trần Hoàng Nam", "Lê Thị Hằng", "Phạm Minh Đức",
    "Đỗ Thanh Tùng", "Vũ Ngọc Mai", "Hoàng Anh Dũng", "Bùi Thị Nhung",
    "Ngô Văn Hòa", "Đặng Ngọc Ánh", "Nguyễn Minh Nhật", "Trần Đức Minh",
    "Lê Quang Vinh", "Phạm Thùy Trang", "Đỗ Quốc Hưng", "Vũ Minh Hoàng",
    "Hoàng Ngọc Bích", "Bùi Đức Long", "Ngô Thị Phương", "Đặng Quốc Toàn",
    "Nguyễn Thành Đạt", "Trần Thị Ngân", "Lê Minh Tuấn", "Phạm Văn Long",
    "Đỗ Thị Mai Anh", "Vũ Quốc Hùng", "Hoàng Thị Ngọc", "Bùi Minh Quân",
    "Ngô Hoàng Anh", "Đặng Thị Lan", "Nguyễn Văn Phúc", "Trần Minh Khoa",
    "Lê Thị Thanh", "Phạm Đức Huy", "Đỗ Hoàng Yến", "Vũ Văn Nam",
    "Hoàng Minh Châu", "Bùi Thị Hương", "Ngô Quốc Khánh", "Đặng Minh Anh"
];

const majors = ["CNTT", "Marketing", "Thiết kế"];

const students6 = [];

for (let i = 1; i <= 100; i++) {
    const student = {
        id: i,
        name: names[i - 1],
        age: Math.floor(Math.random() * 5) + 18,
        gpa: Number((Math.random() * 2 + 2).toFixed(1)),
        major: majors[Math.floor(Math.random() * majors.length)]
    };

    students6.push(student);
}

console.log(students6);
