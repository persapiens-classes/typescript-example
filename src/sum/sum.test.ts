import { sum } from './sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 + -1 is equal to -2', () => {
  expect(sum(-1, -1)).toBe(-2);
})

test('the square foot of 16 is equal to 4', () => {
  expect(Math.sqrt(16)).toBe(4);
})