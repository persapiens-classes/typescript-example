export interface Animal {
    genero: string;
    especie: string;
    emitirSom(): void;
}

export class Arara implements Animal {
    public genero: string;
    public especie: string;
    public cor: string;

    constructor(genero: string, especie: string, cor: string) {
        this.genero = genero;
        this.especie = especie;
        this.cor = cor;
    }

    emitirSom(): string {
        return(`A Arara da espécie ${this.especie} emitiu um som.`)
    }
}

export class Gato implements Animal {
    public genero: string;
    public especie: string;
    public raca: string;

    constructor(genero: string, especie: string, raca: string) {
        this.genero = genero;
        this.especie = especie;
        this.raca = raca;
    }

    emitirSom(): string {
        return(`O gato da raça ${this.raca} fez miau.`)
    }
}