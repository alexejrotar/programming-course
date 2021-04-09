class Test {
  constructor(id) {
    this.id = id;
  }

  test(title, testFunction) {
    try {
      testFunction();
      this.appendSuccess(this.id, `Test "${title}" passed`);
    } catch (assertError) {
      this.appendFailure(this.id, `Test "${title}" failed: ${assertError.message}`);
    }
  }

	appendSuccess(outputId, paragraph) {
  	appendTo(outputId, `<p class="terminalSuccess">${paragraph}</p>`);
	}

	appendFailure(outputId, paragraph) {
  	appendTo(outputId, `<p class="terminalFailure">${paragraph}</p>`);
	}
}

function assertSame(expected, actual) {
  if (expected !== actual) {
		throw new Error(`Expected ${expected} but got ${actual}`);
  }
}
