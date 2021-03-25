'use strict';
// computation = 4 + 3
let memory = 0;

function Basiccalculator(computation) {
  let split = computation.split(' '); // ["4", "+", "3"] 
  let a = split[0]; // 4
  let b = split[2]; // 3

  // TODO: strukturiere den Code durch Kommentare
  let c = split[1]; // +
  if (a && b && c) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (c == '+') {
      memory = a + b;
    }
    else if (c == '-') {
      memory = a - b;
    }
    else if (c == '/') {
      memory = a / b;
    }
    else if (c == '*') {
      memory = a * b;
    }
    return memory;
  }
  else if (a && c) {
    c = parseFloat(c);
    if (a == '+') {
      memory += c
    }
    if (a == '-') {
      memory -= c
    }
    if (a == '/') {
      memory /= c
    }
    if (a == '*') {
      memory *= c
    }
    return memory;
  }
  else {
    return "wrong input";
  }
}

function handleCompute() {
  let computation = document.forms.calculatorForm.elements.computation.value;
  let result = Basiccalculator(computation); // call your function here

  replaceHtml('computation', `<p>${result}</p>`);
}
