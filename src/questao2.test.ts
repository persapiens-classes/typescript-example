import { Violao, Teclado, InstrumentoMusical } from "./questao2";

test('Violao: método estático apresenta som corretamente', () => {
  const violao = new Violao("Violão Clássico", 6);
  violao.cordas = 12;
  expect(InstrumentoMusical.apresentar(violao)).toBe("Som: Violão com 12 cordas.");
});

test('Teclado: método estático apresenta som corretamente', () => {
  const teclado = new Teclado("Teclado Yamaha", 60);
  teclado.teclas = 80;
  expect(InstrumentoMusical.apresentar(teclado)).toBe("Som: Teclado com 80 teclas.");
});
