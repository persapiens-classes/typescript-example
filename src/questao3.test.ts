import { ordenarDecrescente } from './questao3';

test('deve ordenar o array de strings em ordem decrescente', () => {
  const entrada = ['carro', 'boneco', 'ave', 'lapis'];
  const esperado = ['lapis', 'carro', 'boneco', 'ave'];
  expect(ordenarDecrescente(entrada)).toEqual(esperado);
});
