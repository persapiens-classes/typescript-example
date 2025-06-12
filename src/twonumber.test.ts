import { twonumber } from './twonumbers';

test('seleciona os dois primeiros números de um array', () => {
  const array = [2, 4, 6, 2, 8, 9, 5];
  expect(twonumber(array)).toEqual([2, 4]);
});