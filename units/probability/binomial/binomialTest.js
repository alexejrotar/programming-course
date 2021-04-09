'use strict';

const binomialTest = new Test('binomialTest');

binomialTest.test('bin(1,1,1) should return 1', () => {
  assertSame(1, bin(1,1,1));
})

binomialTest.test('bin(1,1,0) should return 0', () => {
  assertSame(0, bin(1,1,0));
})

binomialTest.test('bin(1,1,0.5) should return 0.5', () => {
  assertSame(0.5, bin(1,1,0.5));
})

binomialTest.test('bin(2,1,0.5) should return 0.5', () => {
  assertSame(0.5, bin(2,1,0.5));
})

binomialTest.test('bin(4,2,0.5) should return 0.375', () => {
  assertSame(0.375, bin(4,2,0.5));
})
