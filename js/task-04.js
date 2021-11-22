const $btnDecrement = document.querySelector('button[data-action="decrement"]');
const $btnIncrement = document.querySelector('button[data-action="increment"]');
let counterValue = document.querySelector("#value");

let currentValue = counterValue.textContent;

function decrement() {
  --currentValue;
  counterValue.textContent = currentValue;
}

function increment() {
  ++currentValue;
  counterValue.textContent = currentValue;
}

$btnDecrement.addEventListener("click", decrement);
$btnIncrement.addEventListener("click", increment);