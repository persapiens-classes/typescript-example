import { filtrarPares } from './questao5';

test('deve extrair os elementos pares do array', () => {
  const entrada = [8, 3, 9, 5, 6, 12];
  const esperado = [8, 6, 12];
  expect(filtrarPares(entrada)).toEqual(esperado);
});
