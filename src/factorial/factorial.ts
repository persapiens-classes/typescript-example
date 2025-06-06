export function factorial(n: number): number {
    if (n < 0) {
        throw new Error("fatorial não definido para números negativos");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}