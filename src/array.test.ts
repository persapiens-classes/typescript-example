import { quadradoComFor, quadradoComForEach, concatenarStrings, ordenarElementos, pegarDoisPrimeiros, extrairPares } from "./array";

test('o quadrado do array [3,5,7,3,8,9,1] = [9, 25, 49, 9, 64, 81, 1]', () => {
    const a = [3,5,7,3,8,9,1];
    const resultado = [9, 25, 49, 9, 64, 81, 1];
    expect(quadradoComFor(a)).toEqual(resultado);
})

test('o quadrado do array [3,5,7,3,8,9,1] = [9, 25, 49, 9, 64, 81, 1]', () => {
    const a = [3,5,7,3,8,9,1];
    const resultado = [9, 25, 49, 9, 64, 81, 1];
    expect(quadradoComForEach(a)).toEqual(resultado);
})

test('concatenação do array ["Arrays", "com", "TypeScript"]', () => {
    const a = ['Arrays', 'com', 'TypeScript'];
    const resultado = 'Arrays com TypeScript';
    expect(concatenarStrings(a)).toBe(resultado);
})

test('ordena o array ["carro", "boneco", "ave’, "lapis"]', () => {
    const a = ['carro', 'boneco', 'ave', 'lapis'];
    const resultado = ['ave', 'boneco', 'carro', 'lapis'];
    expect(ordenarElementos(a)).toEqual(resultado)
})

test('os dois primeiros elementos do array [2,4,6,2,8,9,5] é [2,4]', () => {
    const a = [2,4,6,2,8,9,5];
    const resultado = [2,4];
    expect(pegarDoisPrimeiros(a)).toEqual(resultado);
})

test('os pares do array [8, 3, 9, 5, 6, 12] são [8,6,12]', () => {
    const a = [8, 3, 9, 5, 6, 12];
    const resultado = [2,4];
    expect(extrairPares(a)).toEqual(resultado);
})
