// 6.3 - A interface deve possuir pelo menos um método.
export interface Veiculo {
  marca: string;
  modelo: string;
  exibirDetalhes(): string;
}

// 6.1 e 6.2 - Duas classes com a interface e atributos diferentes
export class Carro implements Veiculo {
  marca: string;
  modelo: string;
  public numeroDePortas: number; 

  constructor(marca: string, modelo: string, numeroDePortas: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.numeroDePortas = numeroDePortas;
  }

  // 6.4 - Implementação do método usando os atributos da classe
  exibirDetalhes(): string {
    return `Carro: ${this.marca} ${this.modelo}, com ${this.numeroDePortas} portas.`;
  }
}

export class Motocicleta implements Veiculo {
  marca: string;
  modelo: string;
  public cilindradas: number; 

  constructor(marca: string, modelo: string, cilindradas: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.cilindradas = cilindradas;
  }

  // 6.4 - Implementação do método usando os atributos da classe
  exibirDetalhes(): string {
    return `Moto: ${this.marca} ${this.modelo}, com ${this.cilindradas} cilindradas.`;
  }
}