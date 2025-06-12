export function squareArray(arr: number[]): number[] {
    if (!Array.isArray(arr)) {
        throw new Error("O argumento deve ser um array.");
    }
    return arr.map(num => {
        if (typeof num !== 'number') {
            throw new Error("Todos os elementos do array devem ser números.");
        }
        return num * num;
    });
}
