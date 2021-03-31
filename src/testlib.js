class Test {
  constructor(id) {
    this.id = id;
  }

  test(title, testFunction) {
    try {
      testFunction();
      appendSuccess(this.id, `Test ${title} passed`);
    } catch (assertError) {
      appendFailure(this.id, `Test ${title} failed: ${assertError.message}`);
    }
  }
}

function assertSame(expected, actual) {
  if (expected !== actual) {
		throw new Error(`Expected ${expected} but got ${actual}`);
  }
}
