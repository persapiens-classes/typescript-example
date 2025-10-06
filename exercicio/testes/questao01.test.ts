import { square } from '../questao01.js';

const array : number[] = [3,5,7,3,8,9,1]

test('Calcula o quadrado de cada elemento', () => {
    expect(square(array)).toEqual([9,25,49,9,64,81,1]);
});