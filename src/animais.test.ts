import { Animal, Cachorro, Gato } from './animais';

describe('Testes de Animais', () => {
    describe('Cachorro', () => {
        it('deve apresentar o cachorro corretamente', () => {
            const cachorro = new Cachorro('Rex', 3, 'Labrador');
            expect(Animal.apresentarAnimal(cachorro)).toBe('Rex tem 3 anos e faz Au au!');
        });

        it('deve permitir alterar a raça', () => {
            const cachorro = new Cachorro('Rex', 3, 'Labrador');
            cachorro.setRaca('Pastor Alemão');
            expect(Animal.apresentarAnimal(cachorro)).toBe('Rex tem 3 anos e faz Au au!');
        });
    });

    describe('Gato', () => {
        it('deve apresentar o gato corretamente', () => {
            const gato = new Gato('Mingau', 2, 'Branco');
            expect(Animal.apresentarAnimal(gato)).toBe('Mingau tem 2 anos e faz Miau!');
        });

        it('deve permitir alterar a cor', () => {
            const gato = new Gato('Mingau', 2, 'Branco');
            gato.setCor('Preto');
            expect(Animal.apresentarAnimal(gato)).toBe('Mingau tem 2 anos e faz Miau!');
        });
    });
}); 