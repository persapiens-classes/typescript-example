import { even } from '../arrays/questao05';

const array = [8, 3, 9, 5, 6, 12]

test('Os pares são:', ()=>{
    expect(even(array)).toEqual([8,6,12]);
});