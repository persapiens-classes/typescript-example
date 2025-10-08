import { primeirosDoisElementos } from './questao4';

test('deve retornar os dois primeiros elementos do array', () => {
  const entrada = [2,4,6,2,8,9,5];
  const esperado = [2,4];
  expect(primeirosDoisElementos(entrada)).toEqual(esperado);
});
