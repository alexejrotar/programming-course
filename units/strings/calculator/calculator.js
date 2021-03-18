// computation = 4 + 3
function Basiccalculator(computation) {
  let split = computation.split(' '); // ["4", "+", "3"] 
  let a = parseFloat(split[0]); // 4
  let b = parseFloat(split[2]); // 3

  let c = split[1]; // +
  
  if (c == '+') {
    return a + b; 
  }
  else if (c == '-'){
    return a - b;
  }
  else if (c == '/'){
    return a / b;
  }
  else if (c == '*'){
    return a * b;
  }
}

function handleCompute() {
  let computation = document.forms.calculatorForm.elements.computation.value;
  let result = Basiccalculator(computation); // call your function here

  replaceHtml('computation', `<p>${result}</p>`);
}
