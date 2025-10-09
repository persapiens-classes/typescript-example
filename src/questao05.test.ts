import { justEven } from './questao05';

const array = [8, 3, 9, 5, 6, 12]

test('Numeros pares:', ()=>{
    expect(justEven(array)).toEqual([8,6,12]);
});
