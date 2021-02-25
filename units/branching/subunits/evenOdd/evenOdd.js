{
  let a = 6;
  let even = 'blub?';
  let output = `<p>evenOdd(${a}) = ${even}</p>`;
  appendTo('even', output);

  let b = 7;
  let odd = 'blubblub?';
  output = `<p>evenOdd(${b}) = ${odd}</p>`;
  appendTo('odd', output);
}
