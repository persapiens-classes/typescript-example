import { Padeiro, Atendente, Funcionario } from './doceriaFuncionarios';

describe('Testes dos funcionários da doceria', () => {
  test('Salário inicial do padeiro deve ser calculado corretamente', () => {
    const padeiro = new Padeiro("Carlos", 2000, 100, 2); // 2000 + (100 * 2)
    expect(Funcionario.relatorioPagamento(padeiro)).toBe("Funcionário Carlos receberá R$ 2200");
  });

  test('Salário do padeiro deve mudar após alteração na produção', () => {
    const padeiro = new Padeiro("Carlos", 2000, 150, 2); // 2000 + (150 * 2)
    expect(Funcionario.relatorioPagamento(padeiro)).toBe("Funcionário Carlos receberá R$ 2300");
  });

  test('Salário inicial do atendente deve ser calculado corretamente', () => {
    const atendente = new Atendente("Ana", 1500, 50, 5); // 1500 + (50 * 5)
    expect(Funcionario.relatorioPagamento(atendente)).toBe("Funcionário Ana receberá R$ 1750");
  });

  test('Salário do atendente deve mudar após alteração nas vendas', () => {
    const atendente = new Atendente("Ana", 1500, 80, 5); // 1500 + (80 * 5)
    expect(Funcionario.relatorioPagamento(atendente)).toBe("Funcionário Ana receberá R$ 1900");
  });
});