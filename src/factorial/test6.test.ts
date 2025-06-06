import { factorial } from './factorial';

test('throws an error for decimal inputs', () => {
    expect(() => factorial(5.5)).toThrow("Input must be a non-negative integer");
});