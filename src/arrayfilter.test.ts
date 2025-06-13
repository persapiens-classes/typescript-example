import { arrayfilter } from "./arrayfilter";

test('array filtrado: ', () => {
    expect(arrayfilter([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
});