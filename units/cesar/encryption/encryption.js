'use strict';


function encrypt(text, x) {
  return encryptAux(text, x, 0);
}

function encryptAux (text, x, index) {
  if (text.length == index) {
    return '';
  }

  let result = encryptSingle (text[index], x);

return result + encryptAux (text, x, index+1);
}

function encryptWhile(text, x) {
  let index = 0;
  let result = '';

  while(text.length != index) {
    result += encryptSingle(text[index], x);
    index += 1;
  }

  return result;
}

function encryptFor(text, x) {
  let result = '';

  for(let index = 0; index < text.length; index += 1) {
    result += encryptSingle(text[index], x);
  }

  return result;
}


function handleEncrypt() {
  const plain = document.forms.encryptionForm.elements.plainText.value;
  const key = parseInt(document.forms.encryptionForm.elements.key.value);
  const encrypted = encrypt(plain, key);
  //const encrypted = encryptWhile(plain, key);
  //const encrypted = encryptFor(plain, key);

  replaceHtml('encryption', `<p>${encrypted}</p>`);
}
