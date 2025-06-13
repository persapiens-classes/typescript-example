abstract class InstrumentoMusical {
    constructor(public nome: string, public familia: string) {}
    abstract tocar(): string;
    static demonstrarSom(instrumento: InstrumentoMusical): string[] {
        const descricao = `Demonstração do som do(a) ${instrumento.nome}:`;
        const som = instrumento.tocar();
        
        return [descricao, som];
    }
}

class Violao extends InstrumentoMusical {
    public numeroDeCordas: number;
    constructor(nome: string, numeroDeCordas: number) {
        super(nome, "Cordas");
        this.numeroDeCordas = numeroDeCordas;
    }
    public tocar(): string {
        return `Soando as ${this.numeroDeCordas} cordas do ${this.nome}.`;
    }
}

class Piano extends InstrumentoMusical {
    public numeroDeTeclas: number;
    constructor(nome: string, numeroDeTeclas: number) {
        super(nome, "Teclas");
        this.numeroDeTeclas = numeroDeTeclas;
    }
    public tocar(): string {
        return `Pressionando as ${this.numeroDeTeclas} teclas do ${this.nome}.`;
    }
}

export { InstrumentoMusical, Violao, Piano };