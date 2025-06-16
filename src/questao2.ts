export abstract class InstrumentoMusical {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  abstract tocar(): string;

  // Método estático que chama o método abstrato `tocar`
  static apresentar(instrumento: InstrumentoMusical): string {
    return `Som: ${instrumento.tocar()}`;
  }
}

export class Violao extends InstrumentoMusical {
  cordas: number;

  constructor(nome: string, cordas: number) {
    super(nome);
    this.cordas = cordas;
  }

  tocar(): string {
    return `Violão com ${this.cordas} cordas.`;
  }
}

export class Teclado extends InstrumentoMusical {
  teclas: number;

  constructor(nome: string, teclas: number) {
    super(nome);
    this.teclas = teclas;
  }

  tocar(): string {
    return `Teclado com ${this.teclas} teclas.`;
  }
}
