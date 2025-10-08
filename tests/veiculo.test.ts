import { Carro, Motocicleta, Veiculo } from '../src/veiculos';

describe('Testando classes de veículos com interface comum', () => {

  it('deve criar uma instância de Carro e testar seu método', () => {
    const meuCarro: Veiculo = new Carro('Ford', 'Fiesta', 4);

    expect(meuCarro.exibirDetalhes()).toBe('Carro: Ford Fiesta, com 4 portas.');

    (meuCarro as Carro).numeroDePortas = 2;

    expect(meuCarro.exibirDetalhes()).toBe('Carro: Ford Fiesta, com 2 portas.');
  });

  it('deve criar uma instância de Motocicleta e testar seu método', () => {
    const minhaMoto: Veiculo = new Motocicleta('Honda', 'CB 500', 500);

    expect(minhaMoto.exibirDetalhes()).toBe('Moto: Honda CB 500, com 500 cilindradas.');

    (minhaMoto as Motocicleta).cilindradas = 600;

    expect(minhaMoto.exibirDetalhes()).toBe('Moto: Honda CB 500, com 600 cilindradas.');
  });
});