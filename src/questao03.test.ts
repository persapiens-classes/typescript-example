import { sortArray } from "./questao03";

const array =  ["carro", "boneco", "ave", "lapis"];

test('array ordenado decrescente:', () => {
    expect(sortArray(array)).toEqual(["lapis", "carro", "boneco", "ave"]);
});
