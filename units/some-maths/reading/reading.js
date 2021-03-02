function root(x, r = 2) {
  if (x < 0) {
    return 'complex';
  }
  return x**(1/r);
}

let x = 4;
let r = 3;
let result = root(x, r);
let output = `result of x=${x} and r=${r} is ${result}`;
appendParagraph('reading', output);
