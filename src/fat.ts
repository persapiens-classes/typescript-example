export function fatorial(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}