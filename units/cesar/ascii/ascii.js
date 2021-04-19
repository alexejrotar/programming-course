'use strict'

function handleToAscii() {
  const character = document.forms.asciiForm.elements.character.value;
  const ascii = character.charCodeAt(0);
  document.forms.asciiForm.elements.ascii.value = ascii;
}

function handleToChar() {
  const ascii = document.forms.asciiForm.elements.ascii.value;
  const character = String.fromCharCode(ascii);
  document.forms.asciiForm.elements.character.value = character;
}
