import { filterEvenNumbers } from './filterEvenNumber';

describe('Testes da função filterEvenNumbers', () => {
    test('Deve extrair corretamente os números pares do array [1, 2, 3, 4, 5, 6]', () => {
        expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    test('Deve retornar array vazio para array sem números pares [1, 3, 5]', () => {
        expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
    });

    test('Deve retornar array vazio para entrada vazia', () => {
        expect(filterEvenNumbers([])).toEqual([]);
    });
});