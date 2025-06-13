import { Produto, Bolo, Doce } from './doceria';

describe('Testes de produtos da doceria', () => {
  test('Preço do bolo é calculado corretamente', () => {
    const bolo = new Bolo("Baunilha", 2, 25);
    expect(bolo.calcularPreco()).toBe(50);

    bolo.pesoKg = 3;
    expect(bolo.calcularPreco()).toBe(75);
  });

  test('Preço do doce é calculado corretamente', () => {
    const doce = new Doce("Beijinho", 10, 1.5);
    expect(doce.calcularPreco()).toBe(15);

    doce.quantidade = 20;
    expect(doce.calcularPreco()).toBe(30);
  });
});
