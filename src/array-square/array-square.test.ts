import { arraySquare, arraySquareForEach } from './array-square';

test('The square of the array [3, 5, 7, 3, 8, 9, 1] is equal to [9, 25, 49, 9, 64, 81, 1]', () => {
  expect(arraySquare([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
})

test('The square of the array [3, 5, 7, 3, 8, 9, 1] is equal to [9, 25, 49, 9, 64, 81, 1]', () => {
  expect(arraySquareForEach([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
})


