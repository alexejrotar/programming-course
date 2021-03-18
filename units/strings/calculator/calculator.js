function Basiccalculator() {
  let basicvar = {
    add: '+',
    sub: '-',
    div: '/',
    mlt: '*',
  }
{
    let a = parseFloat;
    let b = parseFloat;
    let result = 'a + b'
}


function handleCompute() {
  let computation = document.forms.calculatorForm.elements.computation.value;
  let result = blub(computation); // call your function here

  replaceHtml('computation', `<p>${result}</p>`);
}
