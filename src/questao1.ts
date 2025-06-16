export interface Transporte {
  calcularViagem(distancia: number): number;
}

export class Carro implements Transporte {
  velocidade: number;
  combustivel: number;

  constructor(velocidade: number, combustivel: number) {
    this.velocidade = velocidade;
    this.combustivel = combustivel;
  }

  calcularViagem(distancia: number): number {
    return distancia / this.velocidade;
  }
}

export class Bicicleta implements Transporte {
  velocidade: number;
  marchas: number;

  constructor(velocidade: number, marchas: number) {
    this.velocidade = velocidade;
    this.marchas = marchas;
  }

  calcularViagem(distance: number): number {
    const eficiencia = this.marchas < 10 ? 1.2 : 1.0;
    return (distance / this.velocidade) * eficiencia;
  }
}
