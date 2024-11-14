// CALCULATOR program 

const display = document.getElementById("display");

function apprendToDislay(input){
   display.value += input;
}

function clearDisplay(){
  display.value = "";
}
function calculate() {
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Errors"
  }
} 
function del(){
  display.value=display.value.slice(0,-1)
}

function calculateSquareRoot() {
  display.value = Math.sqrt(parseFloat(display.value));
}
function calculateSquare() {
  display.value = Math.pow(parseFloat(display.value), 2);
}
function calculateCube() {
  display.value = Math.pow(parseFloat(display.value), 3);
}

function calculateLog() {
  display.value = Math.log10(parseFloat(display.value));
}

function calculateSin() {
  display.value = Math.sin(parseFloat(display.value) * Math.PI / 180);
}

function calculateCos() {
  display.value = Math.cos(parseFloat(display.value) * Math.PI / 180);
}

function calculateTan() {
  display.value = Math.tan(parseFloat(display.value) * Math.PI / 180);
}

function calculateExponential() {
  display.value = Math.exp(parseFloat(display.value));
}

function calculateAsin() {
  display.value = Math.asin(parseFloat(display.value)) * 180 / Math.PI;
}

function calculateAcos() {
  display.value = Math.acos(parseFloat(display.value)) * 180 / Math.PI;
}

function calculateAtan() {
  display.value = Math.atan(parseFloat(display.value)) * 180 / Math.PI;
}

let memory = 0;

function memorySave() {
  memory = parseFloat(display.value);
}

function memoryRecall() {
  display.value = memory;
}

function memoryClear() {
  memory = 0;
}

function calculateLn() {
  display.value = Math.log(parseFloat(display.value));
}

function calculateFactorial() {
  let number = parseInt(display.value);
  if (number < 0) {
    display.value = "Error";
  } else {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    display.value = result;
  }
}

function calculateAbs() {
  display.value = Math.abs(parseFloat(display.value));
}

function appendE() {
  display.value += Math.E;
}

let inDegrees = true;

function toggleDegrees() {
  inDegrees = !inDegrees;
  document.getElementById("degreeToggle").textContent = inDegrees ? "Deg" : "Rad";
}

function showDateTime() {
  const now = new Date();
  display.value = now.toLocaleString();
}
