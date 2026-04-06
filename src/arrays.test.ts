import {
    quadradoComFor,
    quadradoComForEach,
    concatenarComEspaco,
    ordenarDecrescente,
    pegarDoisPrimeiros,
    extrairPares,
    Desenvolvedor,
    Designer
} from './arrays';


describe('Testes das funções de array e classes', () => {

    it('1.1 Deve calcular o quadrado usando for e forEach', () => {
        const arrayOriginal = [3, 5, 7, 3, 8, 9, 1];
        const esperado = [9, 25, 49, 9, 64, 81, 1];

        expect(quadradoComFor(arrayOriginal)).toEqual(esperado);
        expect(quadradoComForEach(arrayOriginal)).toEqual(esperado);
    });

    it('2.1 Deve concatenar o array com espaço usando join', () => {
        const array = ['Arrays', 'com', 'TypeScript'];
        expect(concatenarComEspaco(array)).toBe('Arrays com TypeScript');
    });

    it('3.1 Deve ordenar os elementos de forma decrescente', () => {
        const array = ['carro', 'boneco', 'ave', 'lapis'];
        const esperado = ['lapis', 'carro', 'boneco', 'ave']; // 'l' > 'c' > 'b' > 'a'
        expect(ordenarDecrescente(array)).toEqual(esperado);
    });

    it('4.1 Deve retornar apenas os dois primeiros elementos com slice', () => {
        const array = [2, 4, 6, 2, 8, 9, 5];
        expect(pegarDoisPrimeiros(array)).toEqual([2, 4]);
    });

    it('5.1 Deve extrair apenas os elementos pares com filter', () => {
        const array = [8, 3, 9, 5, 6, 12];
        expect(extrairPares(array)).toEqual([8, 6, 12]);
    });

    it('6.5 Deve instanciar as classes, alterar atributos e testar a interface Funcionario', () => {
        // Instanciando
        const dev = new Desenvolvedor('TypeScript');
        const designer = new Designer('Figma');

        // Testando o método comum
        expect(dev.trabalhar()).toBe('Desenvolvendo sistemas utilizando TypeScript.');
        expect(designer.trabalhar()).toBe('Criando telas incríveis no Figma.');

        // Alterando os atributos e testando novamente
        dev.linguagemPrincipal = 'Python';
        designer.ferramentaDesign = 'Photoshop';

        expect(dev.trabalhar()).toBe('Desenvolvendo sistemas utilizando Python.');
        expect(designer.trabalhar()).toBe('Criando telas incríveis no Photoshop.');
    });
});