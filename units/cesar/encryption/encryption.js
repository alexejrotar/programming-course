'use strict';


function encrypt(text, x) {
  return encryptAux(text, x, 0);
}

function encryptAux (text, x, index) {
  if (text.length == index) {
    return '';
  }

  let result = encryptSingle (text[index], x)

return result + encryptAux (text, x, index+1)
}


function handleEncrypt() {
  const plain = document.forms.encryptionForm.elements.plainText.value;
  const key = parseInt(document.forms.encryptionForm.elements.key.value);
  const encrypted = encrypt(plain, key);
  replaceHtml('encryption', `<p>${encrypted}</p>`);
}
