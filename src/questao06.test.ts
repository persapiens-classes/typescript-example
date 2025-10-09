import { Pessoa, ContaBancaria } from "./questao06";

describe("Interface Contagem com classes Pessoa e ContaBancaria", () => {
    
    test("Pessoa deve retornar a idade ao contar()", () => {
        const pessoa = new Pessoa("Lucas", 25);
        expect(pessoa.contar()).toBe(25);

        pessoa.idade = 30;
        expect(pessoa.contar()).toBe(30);
    });

    test("conta deve retornar o saldo", () => {
        const conta = new ContaBancaria("Lucas", 1000);
        expect(conta.contar()).toBe(1000);

        conta.depositar(500);
        expect(conta.contar()).toBe(1500);

        conta.sacar(200);
        expect(conta.contar()).toBe(1300);
    });

    test("deve lançar erro ao tentar sacar mais do que o saldo atual", () => {
        const conta = new ContaBancaria("Lucas", 300);
        expect(() => conta.sacar(500)).toThrow("Saldo insuficiente");
    });
});