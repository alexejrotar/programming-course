{
  // define and call your function here
  function swapNumbers(a, b) {
    let temp;
    temp = a;
    a = b;
    b = temp; 
    return [a, b];
  } 

  let a;
  let b;

  [a, b] = swapNumbers (5, 10);
  
  // do not alter code below this comment
  let output = `a = ${a}, b = ${b}`;
  appendTo('swapfun', output);
}
