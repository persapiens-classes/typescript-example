export let couple =(array: number[]) : number[] =>{
    let newArray :number[] = array.filter(element => element % 2 === 0) // Filtrando por pares
    return newArray;
}