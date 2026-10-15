// // // const childNote = document.getElementById("child");
// // // const parent = document.getElementById("parent")
// // // console.log(childNote.firstElementChild);

// // console.log(document.querySelector("div"));
// // // lay nhieu the cung 1 luc
// // console.log(document.querySelectorAll(".child"))
// document.querySelector("#parent").innerHTML = "text thay doi";
// // in ra gia tri
// document.querySelector("#parent").innerHTML = "<div>text thay doi</div>";
// // in ra ca div
// function doiMau() {
//   document.getElementById("child").style.backgroundColor = "blue";
// }
function changeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  const caller = event.target;
  event.target.style.backgroundColor = `rgb(${r} ${g} ${b})`;
}
function deleteColor() {
  const caller = event.target;
  event.target.style.backgroundColor = "";
}

function changePosition() {
  const left = Math.floor(Math.random() * 1200);
  const top = Math.floor(Math.random() * 750);
  document.getElementById("noButton").style.cssText =
    `position: absolute; left: ${left}px; top: ${top}px`;
}