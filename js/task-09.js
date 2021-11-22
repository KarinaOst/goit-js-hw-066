function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refBody = document.body;
const refButton = document.querySelector(".change-color");
const refSpan = document.querySelector(".color");

refButton.addEventListener("click", changeColor);

function changeColor() {
  refBody.style.backgroundColor = getRandomHexColor();
  refSpan.innerHTML = getRandomHexColor();
}