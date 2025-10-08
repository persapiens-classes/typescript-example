import { myConcat } from "../arrays/questao02";

const array = ["Arrays", "com", "Typescript"]

test('Meu array concatenado:', () => {
    expect(myConcat(array)).toEqual("Arrays com Typescript");
});