

import { InstrumentoMusical, Violao, Piano } from './abstract';

describe('Testes para InstrumentoMusical e suas subclasses', () => {

    test('deve retornar a descrição e o som corretos para um Violão com atributos alterados', () => {

        const meuViolao = new Violao('Violão Folk', 6);
        meuViolao.nome = 'Violão de Aço';
        meuViolao.numeroDeCordas = 12;


        const resultado = InstrumentoMusical.demonstrarSom(meuViolao);


        expect(resultado).toEqual([
            'Demonstração do som do(a) Violão de Aço:',
            'Soando as 12 cordas do Violão de Aço.'
        ]);
    });


    test('deve retornar a descrição e o som corretos para um Piano com atributos alterados', () => {

        const meuPiano = new Piano('Piano Digital', 88);
        meuPiano.nome = 'Piano Vertical';
        meuPiano.numeroDeTeclas = 76;


        const resultado = InstrumentoMusical.demonstrarSom(meuPiano);
        expect(resultado).toEqual([
            'Demonstração do som do(a) Piano Vertical:',
            'Pressionando as 76 teclas do Piano Vertical.'
        ]);
    });
});