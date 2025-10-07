export const ordenarDecrescente = (palavras: string[]): string[] =>
  palavras.sort((a, b) => {
    if (a > b) return -1;   // se a vem depois de b, troca de lugar
    if (a < b) return 1;    // se a vem antes de b, mantém
    return 0;               // iguais
  });

console.log(ordenarDecrescente(['carro', 'boneco', 'ave', 'lapis']));
