import { Retangulo, Circulo } from './q6';

test('testa cálculo da área de Retângulo e Círculo', () => {
  const ret = new Retangulo(5, 10);
  expect(ret.calcular()).toBe(50); // 5 * 10 = 50

  const circ = new Circulo(3);
  expect(circ.calcular()).toBeCloseTo(28.274, 3); // π * 3² ≈ 28.274

  // testar novamente com atributos diferentes
  ret.largura = 7;
  ret.altura = 2;
  expect(ret.calcular()).toBe(14); // 7 * 2 = 14

  circ.raio = 4;
  expect(circ.calcular()).toBeCloseTo(50.265, 3); // π * 4² ≈ 50.265
});
