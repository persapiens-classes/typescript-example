import { calculaQuadrado } from './questao1';


test('deve calcular o quadrado dos elementos do array', () => {
  const entrada = [3,5,7,3,8,9,1];
  const esperado = [9, 25, 49, 9, 64, 81, 1];
  expect(calculaQuadrado(entrada)).toEqual(esperado);
});

