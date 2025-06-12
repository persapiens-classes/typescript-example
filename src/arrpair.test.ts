import { arrpair } from './arrpair';

test('retorna numeros pares de um array', () => {
    const array = [8, 3, 9, 5, 6, 12];
        expect(arrpair(array)).toEqual([8, 6, 12]);
    });
