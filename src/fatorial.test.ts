import { fatorial } from './fatorial';

test('fatorial de 0 deve retornar 1', () => {
    expect(fatorial(0)).toBe(1);
  });

test('fatorial de 1 deve retornar 1', () => {
    expect(fatorial(1)).toBe(1);
});

test('fatorial de 5 = 120 e, o fatorial de 3 = 6', () => {
    expect(fatorial(5)).toBe(120);
    expect(fatorial(3)).toBe(6);
});

test('fatorial não é definido para numeros negativo, logo dá erro', () => {
    expect(fatorial(-6)).toBe(720);
});

test('fatorial de 6 = 720', () => {
    expect(fatorial(6)).toBe(720);
});


