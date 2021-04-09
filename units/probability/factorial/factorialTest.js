'use strict';

const factorialTest = new Test('factorialTest');

factorialTest.test('Negative numbers should return 1', () => {
  const expected = 1;
  const actual = fac(-1);
  assertSame(expected, actual);
})

factorialTest.test('Zero should return 1', () => {
  const expected = 1;
  const actual = fac(0);
  assertSame(expected, actual);
})

factorialTest.test('3 should return 6', () => {
  const expected = 6;
  const actual = fac(3);
  assertSame(expected, actual);
})
