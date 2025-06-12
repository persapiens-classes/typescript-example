import {
    quadradoComFor,
    quadradoComForEach,
    concatenarComEspaco,
    ordenarArray,
    pegarDoisPrimeiros,
    filtrarPares
} from './arrays';

describe('Funções de array', () => {
  const numeros = [3, 5, 7, 3, 8, 9, 1];
  const strings = ['Arrays', 'com', 'TypeScript'];
  const palavras = ['carro', 'boneco', 'ave', 'lapis'];
  const maisNumeros = [2, 4, 6, 2, 8, 9, 5];
  const misto = [8, 3, 9, 5, 6, 12];

  test('quadradoComFor deve retornar os quadrados dos elementos', () => {
    expect(quadradoComFor(numeros)).toEqual([9, 25, 49, 9, 64, 81, 1]);
  });

  test('quadradoComForEach deve retornar os quadrados dos elementos', () => {
    expect(quadradoComForEach(numeros)).toEqual([9, 25, 49, 9, 64, 81, 1]);
  });

  test('concatenarComEspaco deve juntar strings com espaço', () => {
    expect(concatenarComEspaco(strings)).toBe('Arrays com TypeScript');
  });

  test('ordenarArray deve ordenar os elementos em ordem alfabética', () => {
    expect(ordenarArray(palavras)).toEqual(['ave', 'boneco', 'carro', 'lapis']);
  });

  test('pegarDoisPrimeiros deve retornar os dois primeiros elementos', () => {
    expect(pegarDoisPrimeiros(maisNumeros)).toEqual([2, 4]);
  });

  test('filtrarPares deve retornar apenas os pares', () => {
    expect(filtrarPares(misto)).toEqual([8, 6, 12]);
  });
});
