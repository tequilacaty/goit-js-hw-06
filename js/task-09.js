function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector("button.change-color");
const colorNumberEl = document.querySelector(".color");

buttonEl.addEventListener("click", changeColor);

function changeColor() {
  const CurrentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = CurrentColor;
  colorNumberEl.textContent = CurrentColor;
}
