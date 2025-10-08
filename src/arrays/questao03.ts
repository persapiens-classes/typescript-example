export let decree = (array : string[]) : string[] => {
    let result = array.sort((a: string, b: string) => a>b ? -1 : 1);
    return result;
}