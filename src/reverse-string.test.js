const reverse = require('./reverse-string.js');

test('Function exists', () => {
  expect(reverse('hello')).toBeDefined();
});
test('function reverses string', () => {
  expect(reverse('hello')).toBe('olleh');
});
