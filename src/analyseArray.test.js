import { analyseArray } from './analyseArray';

test('Function returns something', () => {
  expect(analyseArray([3])).toBeDefined();
});

test('Function can calculate average', () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])['average']).toBe(4);
});

test('Function can calculate min', () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])['min']).toBe(1);
});

test('Function can calculate max', () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])['max']).toBe(8);
});

test('Function can calculate length', () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])['length']).toBe(6);
});
