function mean() {
  let a = 5;
  let b = 8;
  let c = 14;

  let mean = 0;

  const abcSpan = document.getElementById("abc");
  const meanSpan = document.getElementById("mean");

  abcSpan.innerHTML = `${a}, ${b}, ${c}`;
  meanSpan.innerHTML = mean;
}

mean();
