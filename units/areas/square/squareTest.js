const squareAreaTest = new Test('squareAreaTest');

squareAreaTest.test('Square area', () => {
  expected = 4;
  actual = squareArea(2);
  assertSame(expected, actual);
})
