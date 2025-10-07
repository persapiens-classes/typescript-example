import { Moto, Carro } from '../questao06';

test("Instancia Moto e Carro, altera atributos e testa o método acelerar", () => {

  const moto = new Moto("Honda", "CB500", "500cc", 180);
  const carro = new Carro("Toyota", "Corolla", true, 220);

  moto.modelo = "Yamaha";
  moto.velocidadeMax = 200;

  carro.modelo = "Supra";
  carro.velocidadeMax = 300;

  moto.acelerar();
  carro.acelerar();

  expect(moto.acelerar()).toEqual("A moto Yamaha acelera a: 200km/h");
  expect(carro.acelerar()).toEqual("O carro Supra acelera a: 300km/h");

  expect(moto.modelo).toBe("Yamaha");
  expect(carro.modelo).toBe("Supra");
});
