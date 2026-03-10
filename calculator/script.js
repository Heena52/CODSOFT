let inputDisplay = document.getElementById("input");
let outputDisplay = document.getElementById("output");

let firstNumber = "";
let secondNumber = "";
let op = "";

// number input
function press(num){

if(op === ""){
firstNumber += num;
}
else{
secondNumber += num;
}

inputDisplay.innerText = firstNumber + " " + op + " " + secondNumber;

}

// operator input
function operator(value){

op = value;

inputDisplay.innerText = firstNumber + " " + op;

}

// clear display
function clearDisplay(){

firstNumber = "";
secondNumber = "";
op = "";

inputDisplay.innerText = "";
outputDisplay.innerText = "0";

}

// calculation
function calculate(){

let a = Number(firstNumber);
let b = Number(secondNumber);
let result = 0;

if(op === "+"){
result = a + b;
}
else if(op === "-"){
result = a - b;
}
else if(op === "*"){
result = a * b;
}
else if(op === "/"){

if(b === 0){
result = "Error";
}
else{
result = a / b;
}

}

outputDisplay.innerText = result;

}
