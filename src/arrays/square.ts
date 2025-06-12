export function quadradoFor(arr: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result;
}

export function quadradoForEach(arr: number[]): number[] {
    const result: number[] = [];
    arr.forEach(num => result.push(num * num));
    return result;
}
