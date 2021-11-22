const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const makeOutputName = (event) => {
  outputName.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.length === 0) {
    outputName.textContent = "Anonymous";
  }
};

inputName.addEventListener("input", makeOutputName);