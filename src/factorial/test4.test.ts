import { factorial } from './factorial';

const negativeFactorialError = "It doenst exist the factorial of a negative number";

test('throws an error for any negative integer', () => {
        expect(() => factorial(-3)).toThrow(negativeFactorialError);
});