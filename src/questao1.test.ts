import { Carro, Bicicleta } from "./questao1";

test('Carro: calcula tempo de viagem', () => {
  const carro = new Carro(100, 15);
  expect(carro.calcularViagem(200)).toBe(2);
});

test('Bicicleta: calcula tempo com menos marchas', () => {
  const bicicleta = new Bicicleta(20, 6);
  expect(bicicleta.calcularViagem(20)).toBeCloseTo(1.2);
});

test('Bicicleta: calcula tempo com mais marchas', () => {
  const bicicleta = new Bicicleta(20, 12);
  expect(bicicleta.calcularViagem(20)).toBe(1);
});
