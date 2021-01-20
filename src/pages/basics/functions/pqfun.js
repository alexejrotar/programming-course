{
  let x1;
  let x2;

  function roots(p, q) {
    let x1 = (-p+(p**2-4*q)**(1/2))/2;
    let x2 = (-p-(p**2-4*q)**(1/2))/2;
    return [x1, x2];
  }

  [x1, x2] = roots(-1/3, -5);
  output = `<p>x1 = ${x1}, x2 = ${x2}</p>`;
  appendTo('pqfun-a', output);

  [x1, x2] = roots(2, -10);
  output = `<p>x1 = ${x1}, x2 = ${x2}</p>`;
  appendTo('pqfun-b', output);

  [x1, x2] = roots(-3, -8);
  output = `<p>x1 = ${x1}, x2 = ${x2}</p>`;
  appendTo('pqfun-c', output);
}
