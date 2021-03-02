function executeSign() {
  appendParagraph('sign', `Das Signum von 5 ist ${sign (5)}`); // 1
  appendParagraph('sign', `Das Signum von -10 ist ${sign (-10)}`); // 0
  appendParagraph('sign', `Das Signum von 0 ist ${sign (0)}`); // -1

} // function "sign (x)" below  sign(exp. 5 ) -> instead of 27

function sign (number){
  if (number > 0){
    result = 1
  }
  else if(number == 0) {
    result = 0
  }
  else if(number < 0){
    result = -1
  }
  return result
}

executeSign();
