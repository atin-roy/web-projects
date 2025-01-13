function generateHexadecimaColor() {
  const values = [];

  // Add digits 0-9
  for (let i = 0; i <= 9; i++) {
    values.push(i.toString());
  }

  // Add uppercase letters A-Z
  for (let i = 65; i <= 70; i++) {
    // ASCII codes for 'A'-'Z'
    values.push(String.fromCharCode(i));
  }

  const len = values.length;
  let generatedColor = "";
  for (let i = 0; i < 6; i++) {
    const j = Math.floor(Math.random() * len);
    generatedColor += values[j];
  }
  generatedColor = "#" + generatedColor;

  return generatedColor;
}

const clickMe = document.querySelector("#color-changer");

clickMe.addEventListener("click", () => {
  setColor();
});

let hex = true;

function chooseRandomSimpleColor() {
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
  const i = Math.floor(Math.random() * 10);
  const color = simpleColors[i];
  return color;
}

function setColor() {
  let generatedColor = "";
  if (hex == true) {
    generatedColor = generateHexadecimaColor();
  } else {
    generatedColor = chooseRandomSimpleColor();
  }

  // ^ update the color
  const box = document.querySelector(".box");
  box.style.backgroundColor = generatedColor;

  // ^ update the text
  const color = document.querySelector("#color");
  color.innerText = generatedColor;
}

const convertToSimple = document.querySelector(".option1");
const convertToHex = document.querySelector(".option2");
convertToSimple.addEventListener("click", () => {
  if (hex == true) {
    hex = false;
    setColor();
  }
});
convertToHex.addEventListener("click", () => {
  if (hex == false) {
    hex = true;
    setColor();
  }
});
