// 1.1 Quadrado de cada elemento - for simples
export function quadradoComFor(numeros: number[]): number[] {
    const resultado: number[] = [];
    for (let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i] * numeros[i]);
    }
    return resultado;
}
// 1.2 Quadrado de cada elemento - forEach
export function quadradoComForEach(numeros: number[]): number[] {
    const resultado: number[] = [];
    numeros.forEach(num => resultado.push(num * num));
    return resultado;
}

// 2. Método JOIN (Concatenar com espaço)
export function concatenarComEspaco(palavras: string[]): string {
    return palavras.join(' ');
}

// 3. Método SORT (Ordem decrescente com arrow function)
export function ordenarDecrescente(palavras: string[]): string[] {
    return palavras.sort((a, b) => b.localeCompare(a));
}

// 4. Método SLICE (Pegar os dois primeiros)
export function pegarDoisPrimeiros(array: number[]): number[] {
    return array.slice(0, 2);
}

// 5. Método FILTER (Extrair pares com arrow function)
export function extrairPares(numeros: number[]): number[] {
    return numeros.filter(num => num % 2 === 0);
}

// 6. Interfaces e Classes
export interface Funcionario {
    trabalhar(): string;
}

export class Desenvolvedor implements Funcionario {
    linguagemPrincipal: string; 

    constructor(linguagemPrincipal: string) {
        this.linguagemPrincipal = linguagemPrincipal;
    }

    trabalhar(): string {
        return `Desenvolvendo sistemas utilizando ${this.linguagemPrincipal}.`;
    }
}

export class Designer implements Funcionario {
    ferramentaDesign: string; 

    constructor(ferramentaDesign: string) {
        this.ferramentaDesign = ferramentaDesign;
    }

    trabalhar(): string {
        return `Criando telas incríveis no ${this.ferramentaDesign}.`;
    }
}