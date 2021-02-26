function blub(x, r = 2) {
  if (x < 0) {
    return 'complex';
  }
  return x**(1/r);
}

let x = 1;
let r = 1;
let result = 1;
let output = `result of x=${x} and r=${r} is ${result}`;
appendParagraph('reading', output);
