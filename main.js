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
