abstract class Personagem {
    protected nome: string;
    protected nivel: number;

    constructor(nome: string, nivel: number) {
        this.nome = nome;
        this.nivel = nivel;
    }

    abstract atacar(): string;

    static descrever(personagem: Personagem): string {
        return `${personagem.nome} (nível ${personagem.nivel}) ataca: ${personagem.atacar()}`;
    }
}

class Guerreiro extends Personagem {
    private arma: string;

    constructor(nome: string, nivel: number, arma: string) {
        super(nome, nivel);
        this.arma = arma;
    }

    public atacar(): string {
        return `Golpeia com sua ${this.arma}`;
    }

    public setArma(arma: string): void {
        this.arma = arma;
    }
}

class Mago extends Personagem {
    private elemento: string;

    constructor(nome: string, nivel: number, elemento: string) {
        super(nome, nivel);
        this.elemento = elemento;
    }

    public atacar(): string {
        return `Lança magia de ${this.elemento}`;
    }

    public setElemento(elemento: string): void {
        this.elemento = elemento;
    }
}

export { Personagem, Guerreiro, Mago };
