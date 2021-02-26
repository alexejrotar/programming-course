{
  function abs(x) {
    if (x > 0) {
      return x;
    }
    else {
      return -x;
    }
  }


  let a = 5;
  let absOfA = abs(a);
  let output = `<p>abs(${a}) = ${absOfA}</p>`;
  appendTo('abs-a', output);

  let b = -8;
  let absOfB = abs(b); 
  output = `<p>abs(${b}) = ${absOfB}</p>`;
  appendTo('abs-b', output);
}
