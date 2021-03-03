// write your function here

function handleCompute() {
  let computation = document.forms.calculatorForm.elements.computation.value;
  let result = 0; // call your function here

  replaceHtml('computation', `<p>${result}</p>`);
}
