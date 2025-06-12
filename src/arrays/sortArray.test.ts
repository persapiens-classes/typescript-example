import { sortArray } from './sortArray';

describe('Testes da função sortArray', () => {
    test('Deve ordenar corretamente o array [5, 2, 9, 1]', () => {
        expect(sortArray([5, 2, 9, 1])).toEqual([1, 2, 5, 9]);
    });

    test('Deve retornar array vazio para entrada vazia', () => {
        expect(sortArray([])).toEqual([]);
    });

    test('Deve ordenar corretamente array com elementos repetidos [3, 3, 1]', () => {
        expect(sortArray([3, 3, 1])).toEqual([1, 3, 3]);
    });
});