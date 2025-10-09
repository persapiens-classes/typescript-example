import { squareForEach, squareFor } from './questao01.js';

const array : number[] = [3,5,7,3,8,9,1]

test('Calcula o quadrado do num usando foreach', () => {
    expect(squareForEach(array)).toEqual([9,25,49,9,64,81,1]);
});

test('Calcula o quadrado do num usando for simples', () => {
    expect(squareFor(array)).toEqual([9,25,49,9,64,81,1]);
});