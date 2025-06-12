import { squareArray } from './sqrarr';

test('squareArray should return an array of squared numbers', () => {
  expect(squareArray([3,5,7,3,8,9,1])).toEqual([9,25,49,9,64,81,1]);
}
);