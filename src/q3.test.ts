import { ordenarDecrescente } from './q3';

test('ordena o array de strings em ordem decrescente', () => {
  expect(ordenarDecrescente(['carro', 'boneco', 'ave', 'lapis']))
    .toEqual(['lapis', 'carro', 'boneco', 'ave']);
});
