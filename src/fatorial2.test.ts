import { fatorial } from './fatorial';

describe('Função fatorial', () => {
  test('fatorial(5) deve retornar 120', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('fatorial(0) deve retornar 1', () => {
    expect(fatorial(0)).toBe(1);
  });

  test('fatorial de número negativo deve lançar erro', () => {
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });
});
