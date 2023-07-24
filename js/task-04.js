const value = document.getElementById('value');
let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
decrementButton.addEventListener('click', decrementNumber);

const incrementButton = document.querySelector('[data-action="increment"]');
incrementButton.addEventListener('click', incrementNumber);

function decrementNumber(){
    counterValue -= 1;
    value.textContent = counterValue;
}

function incrementNumber(){
    counterValue += 1;
    value.textContent = counterValue;
}