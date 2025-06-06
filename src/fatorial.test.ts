import fatorial from "./fatorial";

test("Que o fatorial de 1 seja 1", () => {
    expect(fatorial(1)).toBe(1);
})

test("Que o fatorial de 0 seja 1", () => {
    expect(fatorial(0)).toBe(1);
})

test("Que o fatorial de 8 seja 40320", () => {
    expect(fatorial(8)).toBe(40320);
})

test("Que o fatorial de -1 lance uma excessão", () => {
    expect(fatorial(-1)).toThrowErrorMatchingInlineSnapshot("Não existe fatorial de número negativo");
})