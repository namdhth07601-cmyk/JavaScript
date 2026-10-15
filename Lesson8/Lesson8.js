// if(window.confirm("Bạn có chắc chắn có muốn xóa sản phẩm không")){
//     alert("Xóa sản phẩm thành công");
// } else {
//     alert("Bạn đã ấn cancel ");
// }
// document.getElementById("Back").addEventListener("click", () => (history.back()));
// console.log(window)
// const newWindow = window.open();
// newWindow.location.href = "https://www.google.com";
// newWindow.screen.height = "400px";
// newWindow.screen.width = "600px";
// let i = 3;
// function countDown() {
//     setTimeout(() => { alert("đã qua ${i} giây kể từ lúc mở trình duyệt")
//     i = i + 3;
//     }, 3000);
// }
// setInterval(countDown, 3000);
let second = 0;
let minute = 0;
let hour = 0;
let timerInterval = null;

function updateTimer() {
    if (minute == 60) {
        hour++;
        minute = 0;
        second = 0;
        document.getElementById("timerHour").innerHTML = hour;
        document.getElementById("timerMinute").innerHTML = minute;
        document.getElementById("timerSecond").innerHTML = second;
    }
    if (second == 60) {
        minute++;
        second = 0;
        document.getElementById("timerHour").innerHTML = hour;
        document.getElementById("timerMinute").innerHTML = minute;
        document.getElementById("timerSecond").innerHTML = second;
    }
    if (second <= 9) {
        document.getElementById("timerHour").innerHTML = hour;
        document.getElementById("timerMinute").innerHTML = minute;
        document.getElementById("timerSecond").innerHTML = "0" + second;
    } else {
        document.getElementById("timerHour").innerHTML = hour;
        document.getElementById("timerMinute").innerHTML = minute;
        document.getElementById("timerSecond").innerHTML = second;
    }
    second++;
}

document.getElementById("startTimer").addEventListener("click", () => {
    if (timerInterval !== null) return;
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById("startTimer").disabled = true;
    document.getElementById("pauseTimer").disabled = false;
});

document.getElementById("pauseTimer").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById("startTimer").disabled = false;
    document.getElementById("pauseTimer").disabled = true;
});

document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    second = 0;
    minute = 0;
    hour = 0;
    document.getElementById("timerHour").innerHTML = "00";
    document.getElementById("timerMinute").innerHTML = "00";
    document.getElementById("timerSecond").innerHTML = "00";
    document.getElementById("startTimer").disabled = false;
    document.getElementById("pauseTimer").disabled = true;
});
