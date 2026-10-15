//inline CSS: .style.x = "value"
//via class
//class name coi giá trị được gắn vào là giá trị tuyệt đối và gắn vào cho thuộc tính class của thẻ html
// document.getElementById("div1").className = "background bigText ahi hmph";
//ClassList: coi những giá trị class của 1 thẻ là DOM Token list (một danh sách các class)
//Thêm hoặc xóa phần tử khỏi danh sách đó
//Xóa thông qua classList
// console.log(document.getElementById("div1").classList.remove("bigText"));
// console.log(document.getElementById("div1").classList.add("bigText"));
// console.log(document.getElementById("div1").classList.toggle("bigText"));

// setTimeout(() => {
//     document.getElementById("slider").src = "./images/"
// },2000);

const arrSrc = [
  "./images/a1.webp",
  "./images/a2.webp",
  "./images/a3.webp",
  "./images/a4.webp",
  "./images/a5.webp",
];

let currentIndex = 0;
let interval;
function next(){
    if (currentIndex == arrSrc.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    document.getElementById("Slider").src = arrSrc[currentIndex];
}

function start(){
    interval = setInterval(next,2000);
}

function pre(){
    if (currentIndex == 0) {
        currentIndex = arrSrc.length - 1;
        document.getElementById("Slider").src = arrSrc[currentIndex];
    } else {
        currentIndex--;
        document.getElementById("Slider").src = arrSrc[currentIndex];
    }
}
function stop(){
    clearInterval(interval);
}