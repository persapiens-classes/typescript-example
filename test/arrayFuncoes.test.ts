import {
  quadradoComFor,
  quadradoComForEach,
  juntarComEspaco,
  ordenarArray,
  pegarDoisPrimeiros,
  filtrarPares,
} from "../src/arrayFuncoes";

describe("Funções de manipulação de arrays", () => {
  test("Quadrado com for", () => {
    expect(quadradoComFor([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
  });

  test("Quadrado com forEach", () => {
    expect(quadradoComForEach([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
  });

  test("Juntar com espaço", () => {
    expect(juntarComEspaco(["Arrays", "com", "TypeScript"])).toBe("Arrays com TypeScript");
  });

  test("Ordenar array", () => {
    expect(ordenarArray(["carro", "boneco", "ave", "lapis"])).toEqual(["ave", "boneco", "carro", "lapis"]);
  });

  test("Pegar dois primeiros", () => {
    expect(pegarDoisPrimeiros([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
  });

  test("Filtrar pares", () => {
    expect(filtrarPares([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
  });
});
