// teste
import { concatArray } from "./questao02";

const array = ["Arrays", "com", "Typescript"]

test('array concatenado:', () => {
    expect(concatArray(array)).toEqual("Arrays com Typescript");
});
