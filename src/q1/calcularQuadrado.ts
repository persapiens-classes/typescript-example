export function calcularQuadradoFor(array: number[]): number[]{
    const resultado: number[] = [];
    for(let i=0; i<array.length;i++){
        resultado.push(array[i]*array[i])
    }
    return resultado
}

export function calcularQuadradoForEach(array: number[]): number[]{
    const resultado: number[] = []
    array.forEach(number => {
        resultado.push(number * number)
    }) 
    console.log(resultado)
    return resultado
}

