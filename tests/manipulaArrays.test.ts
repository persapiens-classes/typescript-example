import { calculaQuadradoFor, calculaQuadradoForEach, concatenarStrings, ordenarDecrescente, pegarDoisPrimeiros, filtrarPares } from '../src/manipulaArrays';


// --- Teste para o Item 1 ---
describe('1. Calculo do Quadrado de elementos de um array', () => {

  const arrayTeste = [3, 5, 7, 3, 8, 9, 1];
  const resultadoEsperado = [9, 25, 49, 9, 64, 81, 1];

  it('deve calcular o quadrado usando for simples', () => {
    expect(calculaQuadradoFor(arrayTeste)).toEqual(resultadoEsperado);
  });

  it('deve calcular o quadrado usando forEach', () => {
    expect(calculaQuadradoForEach(arrayTeste)).toEqual(resultadoEsperado);
  });
});


// Teste 2
describe('2. Concatenando strings de um array', () => {
  it('deve retornar uma única string com as palavras separadas por espaço', () => {
    const arrayTeste = ['Arrays', 'com', 'TypeScript'];
    const resultadoEsperado = 'Arrays com TypeScript';
    expect(concatenarStrings(arrayTeste)).toBe(resultadoEsperado);
  });
});


// Teste 3
describe('3. Ordenando array em ordem decrescente', () => {
  it('deve ordenar o array de strings em ordem alfabética decrescente', () => {
    const arrayTeste = ['carro', 'boneco', 'ave', 'lapis'];
    const resultadoEsperado = ['lapis', 'carro', 'boneco', 'ave'];
    expect(ordenarDecrescente(arrayTeste)).toEqual(resultadoEsperado);
  });
});


// Teste 4 
describe('4. Extraindo os dois primeiros elementos', () => {
  it('deve retornar um novo array contendo apenas os dois primeiros elementos', () => {
    const arrayTeste = [2, 4, 6, 2, 8, 9, 5];
    const resultadoEsperado = [2, 4];
    expect(pegarDoisPrimeiros(arrayTeste)).toEqual(resultadoEsperado);
  });
});


// Teste 5
describe('5. Filtrando números pares', () => {
  it('deve retornar um array contendo apenas os números pares', () => {
    const arrayTeste = [8, 3, 9, 5, 6, 12];
    const resultadoEsperado = [8, 6, 12];
    expect(filtrarPares(arrayTeste)).toEqual(resultadoEsperado);
  });
});