

// Interface 
export interface Calculavel {
  calcular(): number; // método comum
}

// Classe Retângulo
export class Retangulo implements Calculavel {
  constructor(public largura: number, public altura: number) {}

  calcular(): number {
    // retorna a área
    return this.largura * this.altura;
  }
}

// Classe Circulo
export class Circulo implements Calculavel {
  constructor(public raio: number) {}

  calcular(): number {
    // retorna a área do círculo
    return Math.PI * this.raio ** 2;
  }
}
