 {
    let counter = 0;
  
    // your code here
    function count() {
      counter++;
  
      
      if (counter % 15 == 0) {
        return "fizzbuzz"; 
      }
  
      else if (counter % 3 == 0) {
        return "fizz";
      }
  
      else if  (counter % 5 == 0) {
        return "buzz";
      }
  
      else {
        return counter
      }
    }
    
  
    
    for (let i=0; i<16; i++) {
      let fizz = count (); 
      let output = `<p>${i+1}: ${fizz}</p>`;
      appendTo('fizzBuzz', output);
    }
  }
  
