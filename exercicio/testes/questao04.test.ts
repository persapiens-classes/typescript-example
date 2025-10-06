import { sliceTwo } from '../questao04.js';

const array : number[] = [2,4,6,2,8,9,5]

test('Os dois primeiros elementos são:', () => {
    expect(sliceTwo(array)).toEqual([2,4]);
});
