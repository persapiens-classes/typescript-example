import { arrayslice } from "./arrayslice";

test('primeiros valores do array:', () => {
    expect(arrayslice([2,4,6,2,8,9,5])).toEqual([2, 4]);
});