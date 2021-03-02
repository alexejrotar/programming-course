'use strict';

let lower = 1;
let upper = 1000000;
let guessedNumber = 0;
let numberOfGuesses = 0;

function guess() {
  guessedNumber = Math.floor((lower + upper)/2); // correct this line

  let output = `${guessedNumber}?`;
  replaceHtml('guessedNumber', output);
  numberOfGuesses++;
  replaceHtml('attempts', numberOfGuesses);
}

function adapt(direction) {
  // your code here

  if (direction == -1){
    upper = guessedNumber
  }
  else if (direction == +1){
    lower = guessedNumber
  }
    



  guess();
}

guess();
