
export const extrairPares = (numeros: number[]): number[] => {
  return numeros.filter(n => n % 2 === 0);
};


console.log(extrairPares([8, 3, 9, 5, 6, 12])); // [8, 6, 12]
