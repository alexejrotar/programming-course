'use strict';

let lower = 1;
let upper = 1000000;
let guessedNumber = 0;
let numberOfGuesses = 0;

function guess() {
  guessedNumber = 0; // correct this line

  let output = `${guessedNumber}?`;
  replaceHtml('guessedNumber', output);
  numberOfGuesses++;
  replaceHtml('attempts', numberOfGuesses);
}

function adapt(direction) {
  // your code here

  guess();
}

guess();
