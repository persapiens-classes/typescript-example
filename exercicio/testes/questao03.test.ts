import { decree } from "../questao03";

const array =  ["carro", "boneco", "ave", "lapis"];

test('Meu array ordenado decrescente:', () => {
    expect(decree(array)).toEqual(["lapis", "carro", "boneco", "ave"]);
});