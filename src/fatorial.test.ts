import { fatorial } from '../src/fatorial';

describe('Função fatorial', () => {
  test('Deve retornar 120 para entrada 5', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('Deve retornar 1 para entrada 0', () => {
    expect(fatorial(0)).toBe(1);
  });

    test('Deve retornar 1 para entrada 1', () => {
    expect(fatorial(1)).toBe(1);
  });

  test('Deve lançar erro para número negativo', () => {
    expect(() => fatorial(-3)).toThrow("Número negativo não é permitido.");
  });
});
