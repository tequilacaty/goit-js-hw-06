const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const currentOutput = output.textContent;

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  input.value === ''
    ? (output.textContent = currentOutput)
    : (output.textContent = event.currentTarget.value);
}