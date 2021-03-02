// write the function here

function checkLeapYear() {
  let year = document.forms.leapYearForm.elements.year.value;


  function leapYear (){
    let result; // unsicher ob man so result herholen kann
    if (year % 400 == 0){
      result = true
    }
    else if(year % 100 == 0) {
      result = false
    }
    else if(year % 4 == 0){
      result = true
    }
    else{
      result = false
    }
    return result
 }

  let isLeap = leapYear ();

  let output = `${year} ist kein Schaltjahr`;
  if (isLeap) {
    output = `${year} ist ein Schaltjahr`;
  }

  replaceHtml('leapYear', output);
}
