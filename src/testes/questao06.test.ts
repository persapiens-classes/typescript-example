import { Arara, Gato } from "../classes/questao06";

test("Testando classes Arara e Gato", () => {

    const arara = new Arara("Anodorhynchus", "hyacinthinus", "Azul");
    const gato = new Gato("Felis", "catus", "Persa");

    arara.emitirSom();
    gato.emitirSom();

    expect(arara.emitirSom()).toEqual("A Arara da espécie hyacinthinus emitiu um som.");
    expect(gato.emitirSom()).toEqual("O gato da raça Persa fez miau.")
})