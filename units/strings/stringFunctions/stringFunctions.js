
function greet(name = "Nemo"){
  appendParagraph('strings', `Hello ${name}`);
}
function answer (computation, solution = "42"){
  appendParagraph('strings', `The result of ${computation} is ${solution}`);
}
greet ();
