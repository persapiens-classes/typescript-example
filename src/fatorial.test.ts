import { fatorial } from './fatorial';

describe('fatorial', () => {
  it('deve retornar 120 para o fatorial de 5', () => { // fatorial positivo
    expect(fatorial(5)).toBe(120);
  });
  it('deve retornar 1 para o fatorial de 0', () => { // fatorial 0
    expect(fatorial(0)).toBe(1);
  });
  it('deve retornar 1 para o fatorial de 1', () => { // fatorial 1
    expect(fatorial(1)).toBe(1);
  });
  it('deve lançar um erro para números negativos', () => { // negativo (erro)
    expect(() => fatorial(-4)).toThrow('Fatorial não é definido para números negativos.');
  });
});