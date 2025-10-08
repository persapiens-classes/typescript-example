export let squareForEach = (array: number[]): number[] =>{
    let newArray : number[] = [];
    array.forEach(i => newArray.push(i*i));
    return newArray;
}

export let squareSimpleFor = (array : number[]): number[] =>{
    let newArray : number[] = [];
    for (let i = 0; i < array.length; i++) {
        let iSquare : number = array[i] * array[i];
        newArray[i] = iSquare;
    }

    return newArray;
}