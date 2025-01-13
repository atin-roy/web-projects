function generateHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function generateSimpleColor() {
  const simpleColors = [
    "White",
    "Black",
    "Violet",
    "Indigo",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Red",
    "Pink",
  ];
  return simpleColors[Math.floor(Math.random() * simpleColors.length)];
}

const colorDisplay = document.querySelector("#color");
const box = document.querySelector(".box");
const modeButtons = document.querySelectorAll(".option");
const clickMe = document.querySelector("#color-changer");

let hex = true;

function setColor() {
  const generatedColor = hex ? generateHexColor() : generateSimpleColor();
  box.style.backgroundColor = generatedColor;
  colorDisplay.innerText = generatedColor;
}

modeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    hex = e.target.dataset.mode === "hex";
    setColor();
  });
});

clickMe.addEventListener("click", setColor);

window.addEventListener("DOMContentLoaded", setColor);
