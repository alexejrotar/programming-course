'use strict';

const ncrTest = new Test('ncrTest');

ncrTest.test('k greater than n should return 1', () => {
  assertSame(1, nCr(1, 1));
})

ncrTest.test('k=0 should return 1', () => {
  assertSame(1, nCr(1, 0));
})

ncrTest.test('k equal to n should return 1', () => {
  assertSame(1, nCr(2, 2));
})

ncrTest.test('nCr(4,2) should return 6', () => {
  assertSame(6, nCr(4,2));
})
