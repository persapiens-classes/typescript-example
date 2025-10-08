import { concatenaComEspaco } from './questao2';

test('deve concatenar as strings do array com espaço', () => {
  const entrada = ['Arrays', 'com', 'TypeScript'];
  const esperado = 'Arrays com TypeScript';
  expect(concatenaComEspaco(entrada)).toBe(esperado);
});
