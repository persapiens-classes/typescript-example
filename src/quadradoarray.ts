export const quadradoarrayforeach = (arr: number[]): number[] => {
    const resultado: number[] = [];

    arr.forEach(numero => {
        resultado.push(numero*numero);
    });

    return resultado;
};

export const quadradoarrayfor = (array: number[]): number[] => {
    const resultado: number[] = [];

    for(let i = 0; i < array.length; i++){
        resultado.push(array[i] * array[i]);
    }

    return resultado;
};
