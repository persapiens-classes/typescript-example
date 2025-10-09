export function squareForEach(arr: number[]){
    let newArr: number[] = [];
    arr.forEach(i => newArr.push(i*i));
    return newArr;
}

export function squareFor(arr: number[]) {
    let newArr: number[] = [];
    for(let i = 0; i < arr.length; i++){
        newArr[i] =  arr[i] * arr[i]; 
    }
    return newArr;
}