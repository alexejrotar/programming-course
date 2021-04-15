'use strict';

const encryptionTest = new Test('encryptionTest');

encryptionTest.test('key of 0', () => {
  assertSame('abc', encrypt('abc', 0));
});

encryptionTest.test('key of 1', () => {
  assertSame('bcd', encrypt('abc', 1));
})

encryptionTest.test('key of 26', () => {
  assertSame('abc', encrypt('abc', 26));
})
