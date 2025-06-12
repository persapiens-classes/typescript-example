import { getFirstTwo } from './getFirstTwo';

describe('Testes da função getFirstTwo', () => {
    test('Deve retornar os dois primeiros elementos do array [1, 2, 3, 4]', () => {
        expect(getFirstTwo([1, 2, 3, 4])).toEqual([1, 2]);
    });

    test('Deve retornar array vazio para array vazio', () => {
        expect(getFirstTwo([])).toEqual([]);
    });

    test('Deve retornar apenas um elemento para array com um elemento [1]', () => {
        expect(getFirstTwo([1])).toEqual([1]);
    });
});