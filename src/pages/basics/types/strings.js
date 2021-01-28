'use strict'

function strings() {
  appendParagraph('strings', "hello");
  appendParagraph('strings', 'world');
  appendParagraph('strings', "hello" + `world`);
  appendParagraph('strings', "7 - 3 = 7 - 3");
  appendParagraph('strings', `5 + 10 = ${5 + 10}`);
  appendParagraph('strings', '5 * 2 = ${5 * 2}');
}

