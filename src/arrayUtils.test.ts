import { calcularQuadradoComFor, calcularQuadradoComForEach, concatenarStrings, ordenarElementos, pegarDoisPrimeiros, filtrarPares } from './arrayUtils';

describe('Testes de Manipulação de Arrays', () => {

  describe('Calculo de Quadrados', () => {
    const arrayTeste = [3, 5, 7, 3, 8, 9, 1];
    const resultadoEsperado = [9, 25, 49, 9, 64, 81, 1];

    it('deve calcular o quadrado usando for', () => {
      expect(calcularQuadradoComFor(arrayTeste)).toEqual(resultadoEsperado);
    });

    it('deve calcular o quadrado usando forEach', () => {
      expect(calcularQuadradoComForEach(arrayTeste)).toEqual(resultadoEsperado);
    });
  });

  describe('Concatenar Strings', () => {
    it('deve concatenar o array de strings com espaços', () => {
      const arrayTeste = ['Arrays', 'com', 'TypeScript'];
      const resultadoEsperado = 'Arrays com TypeScript';
      expect(concatenarStrings(arrayTeste)).toBe(resultadoEsperado);
    });
  });

  describe('Ordenar Elementos', () => {
    it('deve ordenar o array de strings em ordem alfabética', () => {
      const arrayTeste = ['carro', 'boneco', 'ave', 'lapis'];
      const resultadoEsperado = ['ave', 'boneco', 'carro', 'lapis'];
      expect(ordenarElementos(arrayTeste)).toEqual(resultadoEsperado);
    });
  });

  describe('Pegar Dois Primeiros Elementos', () => {
    it('deve retornar apenas os dois primeiros elementos do array', () => {
      const arrayTeste = [2, 4, 6, 2, 8, 9, 5];
      const resultadoEsperado = [2, 4];
      expect(pegarDoisPrimeiros(arrayTeste)).toEqual(resultadoEsperado);
    });
  });

  describe('Filtrar Elementos Pares', () => {
    it('deve retornar apenas os números pares do array', () => {
      const arrayTeste = [8, 3, 9, 5, 6, 12];
      const resultadoEsperado = [8, 6, 12];
      expect(filtrarPares(arrayTeste)).toEqual(resultadoEsperado);
    });
  });

});