// write the function here

function checkLeapYear() {
  let year = document.forms.leapYearForm.elements.year.value;

  let isLeap = false; // call the function here

  let output = `${year} ist kein Schaltjahr`;
  if (isLeap) {
    output = `${year} ist ein Schaltjahr`;
  }

  replaceHtml('leapYear', output);
}
