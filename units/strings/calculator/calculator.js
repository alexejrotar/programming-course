// write your function here

function handleCompute() {
  let computation = document.forms.calculatorForm.elements.computation.value;
  let result = blub(computation); // call your function here

  replaceHtml('computation', `<p>${result}</p>`);
}
