import { couple } from '../questao05.js';

const array = [8, 3, 9, 5, 6, 12]

test('Os pares são:', ()=>{
    expect(couple(array)).toEqual([8,6,12]);
});