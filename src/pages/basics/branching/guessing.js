{
  let lower = 1;
  let upper = 1000000;
  let guessedNumber = 0;

  function guess() {
    guessedNumber = Math.floor((lower + upper)/2);
    let output = `<p>${guessedNumber}?</p>`;
    appendTo('guessing', output);
  }

  function adapt(direction) {
    if (direction < 0) {
      upper = guessedNumber;
    } else if (direction > 0) {
      lower = guessedNumber;
    } else {
      lower = upper = guessedNumber;
      return;
    }
    guess();
  }

  guess();
}
