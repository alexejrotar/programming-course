{
let a = 6;
let even = IsEven (a);
let output = `<p>evenOdd(${a}) = ${even}</p>`;
appendTo('even', output);

let b = 7;
let odd = IsEven (b);
output = `<p>evenOdd(${b}) = ${odd}</p>`;
appendTo('odd', output);
}

function IsEven (a){
  let result;
  if (a % 2 == 0) {
    result = 'gerade';
   } else {
    result = 'ungerade'
  }
  return result; 
}
