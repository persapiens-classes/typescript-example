import { doisPrimeiros } from './q4';

test('pega os dois primeiros elementos do array [2,4,6,2,8,9,5]', () => {
  expect(doisPrimeiros([2,4,6,2,8,9,5])).toEqual([2, 4]);
});
