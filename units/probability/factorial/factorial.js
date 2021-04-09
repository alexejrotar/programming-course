function fac(n) {
  if (n <= 0) {
    return 1;
  }
  return n * fac(n-1);
}

function outputFactorial() {
  const number = document.forms.factorialForm.elements.number.value;
  replaceHtml('factorial', `fac(${number}) = ${fac(number)}`);
}
