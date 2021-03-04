'use strict'

function strings() {
  appendParagraph('strings', "hello");
  appendParagraph('strings', 'world');
  appendParagraph('strings', "hello" + `world`);
  let a = 7;
  let b = 3;
  appendParagraph('strings', "7 - 3 = a - b");
  appendParagraph('strings', `7 + 3 = ${a + b}`);
  appendParagraph('strings', '7 * 3 = ${a * b}');
}
