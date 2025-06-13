export class OperacoesArray {
    // 1. Calcular quadrado dos elementos
    static calcularQuadradoFor(array: number[]): number[] {
        const resultado: number[] = [];
        for (let i = 0; i < array.length; i++) {
            resultado.push(array[i] * array[i]);
        }
        return resultado;
    }

    static calcularQuadradoForEach(array: number[]): number[] {
        const resultado: number[] = [];
        array.forEach(numero => {
            resultado.push(numero * numero);
        });
        return resultado;
    }

    // 2. Concatenar strings com espaço
    static concatenarStrings(array: string[]): string {
        return array.join(' ');
    }

    // 3. Ordenar elementos
    static ordenarElementos(array: string[]): string[] {
        return array.sort();
    }

    // 4. Pegar dois primeiros elementos
    static pegarDoisPrimeiros(array: number[]): number[] {
        return array.slice(0, 2);
    }

    // 5. Extrair elementos pares
    static extrairPares(array: number[]): number[] {
        return array.filter(numero => numero % 2 === 0);
    }
} 