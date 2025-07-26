import Calculator from './calculator';
const calc = new Calculator();

test('Add method returns something', () => {
  expect(calc.add(1, 2)).toBeDefined();
});

test('Add method returns sum of two arguments', () => {
  expect(calc.add(1, 2)).toBe(3);
});

test('Add method returns sum of a different two arguments', () => {
  expect(calc.add(3343, 4535)).toBe(7878);
});

test('Subtract method returns something', () => {
  expect(calc.subtract(2, 3)).toBeDefined();
});

test('Subtract method returns first argument minus second argument', () => {
  expect(calc.subtract(2, 3)).toBe(-1);
});

test('Divide method returns something', () => {
  expect(calc.divide(6, 2)).toBeDefined();
});

test('Divide method returns first argument divided by second argument', () => {
  expect(calc.divide(8, 2)).toBe(4);
});

test('Multiply method returns something', () => {
  expect(calc.multiply(9, 5)).toBeDefined();
});

test('Multiply method returns product of arguments', () => {
  expect(calc.multiply(7, 8)).toBe(56);
});
