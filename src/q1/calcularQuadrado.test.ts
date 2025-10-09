import { calcularQuadradoFor, calcularQuadradoForEach } from './calcularQuadrado';

test('calcularQuadradoFor deve retornar o quadrado de cada número', () => {
  const array = [3, 5, 7, 3, 8, 9, 1];
  const esperado = [9, 25, 49, 9, 64, 81, 1];
  expect(calcularQuadradoFor(array)).toEqual(esperado);
});

test('calcularQuadradoForEach deve retornar o quadrado de cada número', () => {
  const array = [3, 5, 7, 3, 8, 9, 1];
  const esperado = [9, 25, 49, 9, 64, 81, 1];
  expect(calcularQuadradoForEach(array)).toEqual(esperado);
});
