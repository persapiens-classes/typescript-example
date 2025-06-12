import { joinspace } from './joinspace';

test('joinspace deve retornar uma string com os elementos do array separados por espaço', () => {
  expect(joinspace(['carro', 'boneco', 'ave', 'lapis'])).toBe('carro boneco ave lapis');
});