let arr: string[] = ['Carro', 'boneco', 'ave', 'lapis']

export function sortArrayAlphabetically(arr: string[]) {
  return arr.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base'}))
}

console.log(sortArrayAlphabetically(arr))