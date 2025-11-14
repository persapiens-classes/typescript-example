
export const doisPrimeiros = (numeros: number[]): number[] => {
  return numeros.slice(0, 2);
};


console.log(doisPrimeiros([2,4,6,2,8,9,5])); // [2, 4]
