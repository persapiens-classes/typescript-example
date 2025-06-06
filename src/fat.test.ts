import { fatorial } from './fat';

test('fatorial de 0 deve ser 1', () => {
  expect(fatorial(0)).toBe(1);
});

test('fatorial de 2 deve ser 2', () => {
  expect(fatorial(2)).toBe(2);
});

test('fatorial de 7 deve ser 5040', () => {
  expect(fatorial(7)).toBe(5040);
});

test('fatorial de -1 deve lançar erro', () => {
  expect(() => fatorial(-1)).toThrow("Fatorial não é definido para números negativos.");
});

test('fatorial de 1 deve ser 1', () => {
  expect(fatorial(1)).toBe(1);
});