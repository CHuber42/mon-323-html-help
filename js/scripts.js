var firstNum = parseInt(prompt("Please enter a number:"));
var secondNum = parseInt(prompt("Please enter a number:"));

function add (num1, num2) {
  return num1 + num2;
}

function multiple(num1, num2){
  return num1 * num2;
};


function subtract (num1, num2) {
  return num1 - num2;
};

function divide (num1, num2) {
  return num1 / num2;
};

alert(add(firstNum, secondNum));
alert(multiple(firstNum, secondNum));
alert(subtract(firstNum, secondNum));
alert(divide(firstNum, secondNum));