import { quadradoFor, quadradoForEach } from './square.js';

describe('Testes da função quadradoFor', () => {
    test('Deve calcular corretamente o quadrado de cada elemento do array [1, 2, 3]', () => {
        expect(quadradoFor([1, 2, 3])).toEqual([1, 4, 9]);
    });

    test('Deve retornar array vazio para entrada vazia', () => {
        expect(quadradoFor([])).toEqual([]);
    });

    test('Deve calcular corretamente para array com um elemento [5]', () => {
        expect(quadradoFor([5])).toEqual([25]);
    });
});

describe('Testes da função quadradoForEach', () => {
    test('Deve calcular corretamente o quadrado de cada elemento do array [1, 2, 3]', () => {
        expect(quadradoForEach([1, 2, 3])).toEqual([1, 4, 9]);
    });

    test('Deve retornar array vazio para entrada vazia', () => {
        expect(quadradoForEach([])).toEqual([]);
    });

    test('Deve calcular corretamente para array com um elemento [5]', () => {
        expect(quadradoForEach([5])).toEqual([25]);
    });
});