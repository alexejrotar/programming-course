function stringsPlayground() {
  let hello = 'Hello World';

  let paragraphs = [
    hello.length,
    hello.toUpperCase(),
    hello.toLowerCase(),
    hello[0],
    hello.indexOf('World'),
    hello.indexOf('world'),
    hello.substring(0,4),
    hello.split(' ')[0],
    hello.split(' ')[1],
    parseInt('123') + 5,
    parseInt('abc')
  ];

  for (let paragraph of paragraphs) {
    appendParagraph('playground', paragraph);
  }

}

stringsPlayground();
