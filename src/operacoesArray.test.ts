import { OperacoesArray } from './operacoesArray';

describe('OperacoesArray', () => {
    // Teste 1: Calcular quadrado dos elementos
    describe('calcularQuadradoFor', () => {
        it('deve calcular o quadrado de cada elemento usando for', () => {
            const array = [3, 5, 7, 3, 8, 9, 1];
            const resultado = OperacoesArray.calcularQuadradoFor(array);
            expect(resultado).toEqual([9, 25, 49, 9, 64, 81, 1]);
        });

        it('deve retornar array vazio quando o array de entrada estiver vazio', () => {
            const array: number[] = [];
            const resultado = OperacoesArray.calcularQuadradoFor(array);
            expect(resultado).toEqual([]);
        });

        it('deve lidar corretamente com números negativos', () => {
            const array = [-2, -3, -4];
            const resultado = OperacoesArray.calcularQuadradoFor(array);
            expect(resultado).toEqual([4, 9, 16]);
        });
    });

    describe('calcularQuadradoForEach', () => {
        it('deve calcular o quadrado de cada elemento usando forEach', () => {
            const array = [3, 5, 7, 3, 8, 9, 1];
            const resultado = OperacoesArray.calcularQuadradoForEach(array);
            expect(resultado).toEqual([9, 25, 49, 9, 64, 81, 1]);
        });

        it('deve retornar array vazio quando o array de entrada estiver vazio', () => {
            const array: number[] = [];
            const resultado = OperacoesArray.calcularQuadradoForEach(array);
            expect(resultado).toEqual([]);
        });

        it('deve lidar corretamente com números negativos', () => {
            const array = [-2, -3, -4];
            const resultado = OperacoesArray.calcularQuadradoForEach(array);
            expect(resultado).toEqual([4, 9, 16]);
        });
    });

    // Teste 2: Concatenar strings
    describe('concatenarStrings', () => {
        it('deve concatenar strings com espaço', () => {
            const array = ['Arrays', 'com', 'TypeScript'];
            const resultado = OperacoesArray.concatenarStrings(array);
            expect(resultado).toBe('Arrays com TypeScript');
        });

        it('deve retornar string vazia quando o array estiver vazio', () => {
            const array: string[] = [];
            const resultado = OperacoesArray.concatenarStrings(array);
            expect(resultado).toBe('');
        });

        it('deve lidar corretamente com strings vazias', () => {
            const array = ['', 'teste', ''];
            const resultado = OperacoesArray.concatenarStrings(array);
            expect(resultado).toBe(' teste ');
        });
    });

    // Teste 3: Ordenar elementos
    describe('ordenarElementos', () => {
        it('deve ordenar os elementos do array', () => {
            const array = ['carro', 'boneco', 'ave', 'lapis'];
            const resultado = OperacoesArray.ordenarElementos(array);
            expect(resultado).toEqual(['ave', 'boneco', 'carro', 'lapis']);
        });

        it('deve retornar array vazio quando o array de entrada estiver vazio', () => {
            const array: string[] = [];
            const resultado = OperacoesArray.ordenarElementos(array);
            expect(resultado).toEqual([]);
        });

        it('deve lidar corretamente com strings maiúsculas e minúsculas', () => {
            const array = ['Carro', 'ave', 'Boneco', 'lapis'];
            const resultado = OperacoesArray.ordenarElementos(array);
            expect(resultado).toEqual(['Boneco', 'Carro', 'ave', 'lapis']);
        });
    });

    // Teste 4: Pegar dois primeiros elementos
    describe('pegarDoisPrimeiros', () => {
        it('deve retornar os dois primeiros elementos do array', () => {
            const array = [2, 4, 6, 2, 8, 9, 5];
            const resultado = OperacoesArray.pegarDoisPrimeiros(array);
            expect(resultado).toEqual([2, 4]);
        });

        it('deve retornar array vazio quando o array de entrada estiver vazio', () => {
            const array: number[] = [];
            const resultado = OperacoesArray.pegarDoisPrimeiros(array);
            expect(resultado).toEqual([]);
        });

        it('deve retornar apenas um elemento quando o array tiver apenas um elemento', () => {
            const array = [1];
            const resultado = OperacoesArray.pegarDoisPrimeiros(array);
            expect(resultado).toEqual([1]);
        });
    });

    // Teste 5: Extrair elementos pares
    describe('extrairPares', () => {
        it('deve extrair apenas os elementos pares do array', () => {
            const array = [8, 3, 9, 5, 6, 12];
            const resultado = OperacoesArray.extrairPares(array);
            expect(resultado).toEqual([8, 6, 12]);
        });

        it('deve retornar array vazio quando não houver números pares', () => {
            const array = [1, 3, 5, 7, 9];
            const resultado = OperacoesArray.extrairPares(array);
            expect(resultado).toEqual([]);
        });

        it('deve retornar array vazio quando o array de entrada estiver vazio', () => {
            const array: number[] = [];
            const resultado = OperacoesArray.extrairPares(array);
            expect(resultado).toEqual([]);
        });

        it('deve lidar corretamente com números negativos', () => {
            const array = [-2, -3, -4, -5, -6];
            const resultado = OperacoesArray.extrairPares(array);
            expect(resultado).toEqual([-2, -4, -6]);
        });
    });
}); 