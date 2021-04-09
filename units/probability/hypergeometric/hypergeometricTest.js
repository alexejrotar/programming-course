'use strict';

const hypergeometricTest = new Test('hypergeometricTest');

hypergeometricTest.test('hyper(1,1,1,1) should be 1', () => {
  assertSame(1, hyper(1,1,1,1));
})

hypergeometricTest.test('hyper(1,1,1,0) should be 0', () => {
  assertSame(0, hyper(1,1,1,0));
})

hypergeometricTest.test('hyper(2,1,1,1) should be 0.5', () => {
  assertSame(0.5, hyper(2,1,1,1));
})

hypergeometricTest.test('hyper(4,2,2,1) should be 0.67', () => {
  assertSame(0.67, Math.round(hyper(4,2,2,1) * 100) / 100);
})
