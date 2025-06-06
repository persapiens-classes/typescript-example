import { factorial } from './factorial';

test('returns 1 for input 0', () => {
    expect(factorial(0)).toBe(1);
})