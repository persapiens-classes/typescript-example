import { factorial } from './factorial.js';

describe('Testes da função fatorial', () => {
    test('Deve calcular corretamente o fatorial de 5', () => {
        expect(factorial(5)).toBe(120); // 5! = 120
    });

    test('Deve lançar erro para número negativo', () => {
        expect(() => factorial(-1)).toThrow('fatorial não definido para números negativos');
    });

    test('Deve retornar 1 para fatorial de 1', () => {
        expect(factorial(1)).toBe(1); // 1! = 1
    });

    test('Deve retornar 1 para fatorial de 0', () => {
        expect(factorial(0)).toBe(1); // 1! = 1
    });
});