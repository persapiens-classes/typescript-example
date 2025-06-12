import { arrwithoutpair } from './arrwithoutpair';

test('retorna numeros pares de um array', () => {
    const array = [8, 3, 9, 5, 6, 12];
        expect(arrwithoutpair(array)).toEqual([3, 9, 5]);
    });
