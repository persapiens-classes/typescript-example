import { extrairPares } from './q5';

test('extrai os números pares do array [8, 3, 9, 5, 6, 12]', () => {
  expect(extrairPares([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
});
