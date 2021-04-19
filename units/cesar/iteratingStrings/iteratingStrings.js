'use strict';

function characters(text, index) {
  if (text.length == index) {
    return;
  }

  appendParagraph('iteratingStrings', text[index]);

  index +=1;
  characters (text, index);
} 

characters('coden ist cool', 0);