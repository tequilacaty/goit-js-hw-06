const fontSize = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");
fontSize.addEventListener("input", changeTextSize);

function changeTextSize() {
  textEl.style.fontSize = fontSize.value + "px";
}
changeTextSize();
