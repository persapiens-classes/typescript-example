export function ordenararray(arr: number[]): number[] {
    return arr.slice().sort((a, b) => a - b);
}