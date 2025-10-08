export function calculaQuadrado(array: number[]) : number[]{
        const resultados = [];
            for(let i = 0; i < array.length; i++){
                    resultados.push(array[i] * array[i]);
                        }
                            return resultados;
                            }