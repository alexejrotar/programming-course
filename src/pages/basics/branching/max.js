{
  let a = 10;
  let b = 8;

  // code here
  function greaterThan (a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  let max = greaterThan (a, b);
  let output = `<p>max(${a},${b}) = ${max}</p>`;
  appendTo('max', output);
}
