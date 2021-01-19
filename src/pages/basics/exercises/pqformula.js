{
  // x^2 + 1/2x -6
  let x1 = (-1/2+((1/2)**2-4*(-6))**(1/2))/2;
  let x2 = (-1/2-((1/2)**2-4*(-6))**(1/2))/2;


  let x3 = (1/2)**2 + 4*6;
  x3 = x3**(1/2);
  x3 -= 1/2;
  x3 /= 2;


  let output = `<p>x1 = ${x1}, x2 = ${x2}</p>`;
  appendTo('pqform', output);

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


  [x1, x2] = [0,0];
  output = `<p>x1 = ${x1}, x2 = ${x2}</p>`;
  appendTo('pqfun-improved-a', output);

  [x1, x2] = [0,0];
  output = `<p>x1 = ${x1}, x2 = ${x2}</p>`;
  appendTo('pqfun-improved-b', output);
}
