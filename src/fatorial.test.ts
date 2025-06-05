import { fatorial } from './fatorial';

test('fatorial de 0 deve ser igual a 1', () => {
    expect(fatorial(0)).toBe(1);
});

test('fatorial de 1 deve ser igual a 1', () => {
    expect(fatorial(1)).toBe(1);
});

test('fatorial de 5 deve ser igual a 120', () => {
    expect(fatorial(5)).toBe(120);
});

test('fatorial de 10 deve ser igual a 3628800', () => {
    expect(fatorial(10)).toBe(3628800);
});

test('fatorial de 15 deve ser igual a 1307674368000', () => {
    expect(fatorial(15)).toBe(1307674368000);
});