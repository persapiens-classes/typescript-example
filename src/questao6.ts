

export interface Descrevivel {
	descrever(): string;
}


export class Pessoa implements Descrevivel {
	nome: string;
	idade: number;

	constructor(nome: string, idade: number) {
		this.nome = nome;
		this.idade = idade;
	}

	descrever(): string {
		return `Pessoa: ${this.nome}, Idade: ${this.idade}`;
	}
}

export class Produto implements Descrevivel {
	nome: string;
	preco: number;

	constructor(nome: string, preco: number) {
		this.nome = nome;
		this.preco = preco;
	}

	descrever(): string {
		return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`;
	}
}
