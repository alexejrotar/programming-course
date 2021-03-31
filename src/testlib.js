class Test {
  constructor(id) {
    this.id = id;
  }

  test(title, testFunction) {
    try {
      testFunction();
    } catch (assertError) {
      appendParagraph(this.id, `Test ${title} failed: ${assertError.message}`);
    }
  }
}

function assertSame(expected, actual) {
  if (expected !== actual) {
		throw new Error(`Expected ${expected} but got ${actual}`);
  }
}
