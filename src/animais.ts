// Classe abstrata Animal
abstract class Animal {
    protected nome: string;
    protected idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método abstrato que deve ser implementado pelas subclasses
    abstract emitirSom(): string;

    // Método estático que usa o método abstrato
    static apresentarAnimal(animal: Animal): string {
        return `${animal.nome} tem ${animal.idade} anos e faz ${animal.emitirSom()}`;
    }
}

// Subclasse Cachorro
class Cachorro extends Animal {
    private raca: string;

    constructor(nome: string, idade: number, raca: string) {
        super(nome, idade);
        this.raca = raca;
    }

    public emitirSom(): string {
        return "Au au!";
    }

    public setRaca(raca: string): void {
        this.raca = raca;
    }
}

// Subclasse Gato
class Gato extends Animal {
    private cor: string;

    constructor(nome: string, idade: number, cor: string) {
        super(nome, idade);
        this.cor = cor;
    }

    public emitirSom(): string {
        return "Miau!";
    }

    public setCor(cor: string): void {
        this.cor = cor;
    }
}

export { Animal, Cachorro, Gato }; 