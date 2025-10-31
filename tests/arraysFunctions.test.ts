import { 
    quadradoForSimples, 
    filtrarPares, 
    ordenarDecrescente, // Nova função a ser testada
    quadradoForEach,    // Nova função a ser testada
    concatenarComEspaco, // Nova função a ser testada
    pegarDoisPrimeiros   // Nova função a ser testada
} from "../src/arraysFunctions";


test("deve calcular o quadrado dos elementos (For Simples)", () => {
    expect(quadradoForSimples([3, 5, 7])).toEqual([9, 25, 49]);
});


test("deve calcular o quadrado dos elementos (ForEach)", () => {
    expect(quadradoForEach([3, 5, 7])).toEqual([9, 25, 49]);
});


test("deve concatenar strings com espaço", () => {
    const arrayStrings = ["Arrays", "com", "TypeScript"];
    expect(concatenarComEspaco(arrayStrings)).toBe("Arrays com TypeScript");
});


test("deve ordenar array de strings decrescentemente", () => {
    const arrayPalavras = ["carro", "boneco", "ave", "lapis"];
    // A ordenação decrescente de strings em português é: lapis, carro, boneco, ave
    expect(ordenarDecrescente(arrayPalavras)).toEqual(["lapis", "carro", "boneco", "ave"]);
});


test("deve pegar os dois primeiros elementos do array (Slice)", () => {
    const arrayNumeros2 = [2, 4, 6, 2, 8, 9, 5];
    expect(pegarDoisPrimeiros(arrayNumeros2)).toEqual([2, 4]);
});


test("deve filtrar apenas números pares", () => {
    expect(filtrarPares([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
});

