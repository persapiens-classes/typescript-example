import { arraySlayerrr } from './questao04';

const array : number[] = [2,4,6,2,8,9,5]

test('Os dois primeiros elementos são:', () => {
    expect(arraySlayerrr(array)).toEqual([2,4]);
});