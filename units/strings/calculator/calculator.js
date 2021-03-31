'use strict';
// computation = 4 + 3
let memory = 0;

function Basiccalculator(computation) {
  let split = computation.split(' '); // ["4", "+", "3"] 

  if (split.length == 3) {
    let first = parseFloat(split[0]);
    let operator = split[1];
    let second = parseFloat(split[2]);
    return handle2Operands(first, operator, second);
  }

  else if (split.length == 2) {
    let operator = split[0];
    let first = parseFloat(split[1]);
    return handle1Operand (operator, first);
  }
  else {
    return "wrong input";
  }
}

function handle2Operands(first, operator, second) {
  if (operator == '+') {
    memory = first + second;
  }
  else if (operator == '-') {
    memory = first - second;
  }
  else if (operator == '/') {
    memory = first / second;
  }
  else if (operator == '*') {
    memory = first * second;
  }
  return memory;
}

function handle1Operand(operator, first) {

  first = parseFloat(first);
  if (operator == '+') {
    memory += first
  }
  if (operator == '-') {
    memory -= first
  }
  if (operator == '/') {
    memory /= first
  }
  if (operator == '*') {
    memory *= first
  }
  return memory;
}

function handleCompute() {
  let computation = document.forms.calculatorForm.elements.computation.value;
  let result = Basiccalculator(computation); // call your function here

  replaceHtml('computation', `<p>${result}</p>`);
}
