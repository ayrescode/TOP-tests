import { caesarCipher } from './caesarCipher';

test('Function returns something', () => {
  expect(caesarCipher('abc', 3)).toBeDefined();
});

test('Function shifts abc to def', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('Function can handle wrapping from z to a. ("xyz", 3) should return "abc"', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Function handles case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Function leaves punctuation unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Khoor, Zruog! returns Nkrru, Cuxrj!', () => {
  expect(caesarCipher('Khoor, Zruog!', 3)).toBe('Nkrru, Cuxrj!');
});

test('bcd shifted -1 should be abc', () => {
  expect(caesarCipher('bcd', -1)).toBe('abc');
});

test('a shifted -1 should be z', () => {
  expect(caesarCipher('a', -1)).toBe('z');
});
