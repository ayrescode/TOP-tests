const capitalise = require('./capitalise.js');

test('Function exists', () => {
  expect(capitalise('hello')).toBeDefined();
});

test('Function capitalises', () => {
  expect(capitalise('hello').toBe('Hello'));
});
