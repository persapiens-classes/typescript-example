export let square = (array: number[]): number[] =>{
    let newArray : number[] = [];
    array.forEach(i => newArray.push(i*i));
    return newArray;
}