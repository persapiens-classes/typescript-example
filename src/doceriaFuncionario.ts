// Classe abstrata
export abstract class Funcionario {
  nome: string;
  salarioBase: number;

  constructor(nome: string, salarioBase: number) {
    this.nome = nome;
    this.salarioBase = salarioBase;
  }

  abstract calcularSalarioMensal(): number;

  static relatorioPagamento(funcionario: Funcionario): string {
    return `Funcionário ${funcionario.nome} receberá R$ ${funcionario.calcularSalarioMensal()}`;
  }
}

// Subclasse Padeiro
export class Padeiro extends Funcionario {
  producaoKg: number;
  bonusPorKg: number;

  constructor(nome: string, salarioBase: number, producaoKg: number, bonusPorKg: number) {
    super(nome, salarioBase);
    this.producaoKg = producaoKg;
    this.bonusPorKg = bonusPorKg;
  }

  calcularSalarioMensal(): number {
    return this.salarioBase + this.producaoKg * this.bonusPorKg;
  }
}

// Subclasse Atendente
export class Atendente extends Funcionario {
  vendas: number;
  comissaoPorVenda: number;

  constructor(nome: string, salarioBase: number, vendas: number, comissaoPorVenda: number) {
    super(nome, salarioBase);
    this.vendas = vendas;
    this.comissaoPorVenda = comissaoPorVenda;
  }

  calcularSalarioMensal(): number {
    return this.salarioBase + this.vendas * this.comissaoPorVenda;
  }
}
