export function quadradoComFor(arr: number[]): number[] {
    let resultado: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i] ** 2);
    }
    return resultado;
}

export function quadradoComForEach(arr: number[]): number[] {
    let resultado: number[] = [];
    arr.forEach(num => resultado.push(num ** 2));
    return resultado;
}

export function concatenarComEspaco(arr: string[]): string {
    return arr.join(" ");
}

export function ordenarArray(arr: string[]): string[] {
    return [...arr].sort();
}

export function pegarDoisPrimeiros<T>(arr: T[]): T[] {
    return arr.slice(0, 2);
}

export function filtrarPares(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
}