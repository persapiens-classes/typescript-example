export let sortArray = (arr: string[]) =>{
    return arr.sort((a, b) => a > b ? -1 : 1); 
}