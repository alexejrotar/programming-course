{
  let counter = 0;

  // write your function here
  function count() {
    counter++;
  }

  for (let i=0; i<=20; i++) {
    let output = `${counter} `;
    appendTo('counter', output);
    count();
  }
}
