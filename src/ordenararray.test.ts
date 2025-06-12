import { ordenararray } from './ordenararray';

test('ordenarArray deve retornar o array ordenado em ordem crescente', () => {
  expect(ordenararray( [2,4,6,2,8,9,5])).toEqual([2, 2, 4, 5, 6, 8, 9]);
});