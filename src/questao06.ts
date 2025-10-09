export interface Contagem {
    contar(): number;
}

export class Pessoa implements Contagem {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    contar(): number {
        return this.idade;
    }
}

export class ContaBancaria implements Contagem {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= valor;
    }

    //saldo atual ao chamar contagem
    contar(): number {
        return this.saldo;
    }
}
