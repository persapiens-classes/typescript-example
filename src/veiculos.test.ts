import { Carro, Aviao } from './veiculos';

describe('Testes de Veículos', () => {
    describe('Carro', () => {
        it('deve calcular o consumo corretamente', () => {
            const carro = new Carro(100, 10);
            expect(carro.calcularConsumo()).toBe(10);

            carro.setQuilometragem(200);
            carro.setCombustivelGasto(20);
            expect(carro.calcularConsumo()).toBe(10);
        });
    });

    describe('Aviao', () => {
        it('deve calcular o consumo corretamente', () => {
            const aviao = new Aviao(1000, 100);
            expect(aviao.calcularConsumo()).toBe(10);

            aviao.setAltitude(2000);
            aviao.setCombustivelRestante(200);
            expect(aviao.calcularConsumo()).toBe(10);
        });
    });
}); 