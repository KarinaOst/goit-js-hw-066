const SizeControlEl = document.querySelector("#font-size-control");
const textControlEl = document.querySelector("#text");

SizeControlEl.addEventListener("input", () => {
  textControlEl.style.fontSize = `${SizeControlEl.value}px`;
});