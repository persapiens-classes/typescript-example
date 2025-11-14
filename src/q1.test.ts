


import {squareArray} from './q1';

test('squares the numbers in an array', () => {
  expect(squareArray([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
});


test('squares the numbers in array using forEach', () => {
    expect(squareArray([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
});
