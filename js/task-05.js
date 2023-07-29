const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const currentOutput = output.textContent;

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  input.value.trim().length > 0
    ? (output.textContent = event.currentTarget.value)
    : (output.textContent = currentOutput);
}