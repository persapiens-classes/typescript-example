export function arrwithoutpair(arr: number[]): number[] {
    return arr.filter((num) => num % 2 === 1);
}
