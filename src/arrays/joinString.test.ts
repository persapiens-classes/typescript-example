import { joinWithSpace } from './joinString';

describe('Testes da função joinWithSpace', () => {
    test('Deve concatenar corretamente o array ["Hello", "World"] com espaço', () => {
        expect(joinWithSpace(["Hello", "World"])).toBe("Hello World");
    });

    test('Deve retornar string vazia para array vazio', () => {
        expect(joinWithSpace([])).toBe("");
    });

    test('Deve concatenar corretamente array com um elemento ["Test"]', () => {
        expect(joinWithSpace(["Test"])).toBe("Test");
    });
});