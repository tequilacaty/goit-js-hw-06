const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', validateInput);
const inputLength = Number(inputEl.dataset.length);

console.log(inputEl.dataset);

function validateInput () {
    inputEl.value.trim().length  === inputLength ? changeClass('valid', 'invalid') : changeClass('invalid', 'valid');
}

function changeClass (first, second) {
    inputEl.classList.remove(second);
    inputEl.classList.add(first);
}