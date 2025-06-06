import { factorial } from './factorial';

const negativeFactorialError = "It doenst exist the factorial of a negative number";

describe('factorial()', () => {
    test('returns 120 for input 5', () => {
        expect(factorial(5)).toBe(120);
    })

    test('returns 1 for input 0', () => {
        expect(factorial(0)).toBe(1);
    })

    test('returns 1 for input 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('throws an error for any negative integer', () => {
        expect(() => factorial(-3)).toThrow(negativeFactorialError);
    });

    test('return 2432902008176640000 for input 20', () => {
        expect(factorial(20)).toBe((2432902008176640000));
    });

    test('throws an error for decimal inputs', () => {
        expect(() => factorial(5.5)).toThrow("Input must be a non-negative integer");
    });
});