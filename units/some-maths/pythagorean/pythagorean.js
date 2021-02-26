function Pythagoras(a, b, c) {
  let result;
  if (a ** 2 + b ** 2 == c ** 2) {
    result = true;
  }
  else if (a ** 2 + c ** 2 == b ** 2) {
    result = true;
  }
  else if (b ** 2 + c ** 2 == a ** 2){
    result = true;
  }
  else {
    result = false;
  }
  return result;
}

appendParagraph('pythagorean', Pythagoras(4,3,6));