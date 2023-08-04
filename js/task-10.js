function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const createRGB = () => {
//   const red = Math.round(Math.random(0, 1) * 255);
//   const green = Math.round(Math.random(0, 1) * 255);
//   const blue = Math.round(Math.random(0, 1) * 255);
//   return `rgb(${red}, ${green}, ${blue})`;
// };

const refs = {
  input: document.querySelector("input"),
  createButton: document.querySelector("button[data-create]"),
  destroyButton: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("div#boxes"),
};

const inputOptions = {
  min: Number(refs.input.min),
  max: Number(refs.input.max),
  step: Number(refs.input.step),
};

refs.input.addEventListener("input", checkInput);
refs.createButton.addEventListener("click", createBoxes);
refs.destroyButton.addEventListener("click", destroyBoxes);

let amount = 0;

function checkInput(event) {
  for (let i = inputOptions.min; i < inputOptions.max; i += inputOptions.step) {
    amount = Number(event.currentTarget.value);
  }

  console.log(amount);
}

function createBoxes() {
  const size = 30;
  const boxesArr = [];
  if (amount < inputOptions.min || amount > inputOptions.max) {
    alert("Ведіть значення від 1 до 100");
    return;
  }
  for (let i = 1; i <= amount; i++) {
    let growingSize = size + i * 10;
    const boxEl = `<div style="width:${growingSize}px; height:${growingSize}px; background-color:${getRandomHexColor()}"></div>`;
    boxesArr.push(boxEl);
  }
  refs.boxes.insertAdjacentHTML("beforeend", boxesArr.join(""));
  refs.input.value = "";
  amount = 0;
}

// видалення------------------------------------------------

function destroyBoxes() {
  while (refs.boxes.hasChildNodes()) {
    refs.boxes.removeChild(refs.boxes.firstChild);
  }
}
