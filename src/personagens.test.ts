import { Guerreiro, Mago, Personagem } from './personagens';

describe('Testes de Personagens', () => {
    describe('Guerreiro', () => {
        it('deve descrever o ataque do guerreiro', () => {
            const guerreiro = new Guerreiro('Jorginho', 5, 'espada');
            expect(Personagem.descrever(guerreiro)).toBe('Jorginho (nível 5) ataca: Golpeia com sua espada');
        });

        it('deve permitir mudar a arma do guerreiro', () => {
            const guerreiro = new Guerreiro('Jorginho', 5, 'espada');
            guerreiro.setArma('machado');
            expect(Personagem.descrever(guerreiro)).toBe('Jorginho (nível 5) ataca: Golpeia com sua machado');
        });
    });

    describe('Mago', () => {
        it('deve descrever o ataque do mago', () => {
            const mago = new Mago('Marcelo', 7, 'fogo');
            expect(Personagem.descrever(mago)).toBe('Marcelo (nível 7) ataca: Lança magia de fogo');
        });

        it('deve permitir mudar o elemento do mago', () => {
            const mago = new Mago('Marcelo', 7, 'fogo');
            mago.setElemento('gelo');
            expect(Personagem.descrever(mago)).toBe('Marcelo (nível 7) ataca: Lança magia de gelo');
        });
    });
});
