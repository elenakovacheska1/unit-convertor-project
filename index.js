/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const numbInputEl = document.getElementById("number-input");
const lengthEl = document.getElementById("result-length");
const volumeEl = document.getElementById("result-volume");
const massEl = document.getElementById("result-mass");
const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", convert);
convert();

function convert() {
  let numbInput = numbInputEl.value;
  convertLength(numbInput);
  convertVolume(numbInput);
  convertMass(numbInput);
}

function convertLength(value) {
  lengthEl.textContent = `${value} meters = ${(value * 3.281).toFixed(
    3
  )} feet | ${value} feet = ${(value / 3.281).toFixed(3)} meters`;
}

function convertVolume(value) {
  volumeEl.textContent = `${value} liters = ${(value * 0.264).toFixed(
    3
  )} gallons | ${value} gallons = ${(value / 0.264).toFixed(3)} liters`;
}

function convertMass(value) {
  massEl.textContent = `${value} kilos = ${(value * 2.204).toFixed(
    3
  )} pounds | ${value} pounds = ${(value / 2.204).toFixed(3)} kilos`;
}
