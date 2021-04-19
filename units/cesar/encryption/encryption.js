'use strict';

function encrypt(plain, key) {
  return plain;
}

function handleEncrypt() {
  const plain = document.forms.encryptionForm.elements.plainText.value;
  const key = document.forms.encryptionForm.elements.key.value;
  const encrypted = encrypt(plain, key);
  replaceHtml('encryption', `<p>${encrypted}</p>`);
}
