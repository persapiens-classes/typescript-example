import { squareArrayFor } from './sqrarr';
import { squareArrayForEach } from './sqrarr';

test('a função deve retornar um array de números elevados ao quadrado', () => {
  expect(squareArrayFor([3,5,7,3,8,9,1])).toEqual([9,25,49,9,64,81,1]);
}
);

test('a função deve retornar um array de números elevados ao quadrado', () => {
  expect(squareArrayForEach([3,5,7,3,8,9,1])).toEqual([9,25,49,9,64,81,1]);
}
);