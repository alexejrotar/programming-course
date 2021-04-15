'use strict';

const singleCharEncryptionTest = new Test('singleCharEncryptionTest');

singleCharEncryptionTest.test('offset of 0', () => {
  assertSame('a', encryptSingle('a', 0));
})

singleCharEncryptionTest.test('offest of 1', () => {
  assertSame('b', encryptSingle('a', 1));
})

singleCharEncryptionTest.test('offset of 26', () => {
  assertSame('a', encryptSingle('a', 26));
})
