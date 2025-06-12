/** ---- 1. Funções que calculam o quadrado d cada elemento do array ---- */

export function quadradoComFor(numeros: number[]): number[] {
  const resultado: number[] = [];
  for (let i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] * numeros[i]);
  }
  return resultado;
}

export function quadradoComForEach(numeros: number[]): number[] {
  const resultado: number[] = [];
  numeros.forEach(numero => {
    resultado.push(numero * numero);
  });
  return resultado;
}

/** ---- 2. Transormando o array, concatenando  ---- */

export function concatenarStrings(palavras: string[]): string {
  return palavras.join(' ');
}

/** ---- 3. Ordenação d elementos ---- */

export function ordenarElementos(elementos: string[]): string[] {
  return [...elementos].sort();
}

/** ---- 4. Pegar os dois primeiros elementos do array ---- */

export function pegarDoisPrimeiros(numeros: number[]): number[] {
  return numeros.slice(0, 2);
}

/** ---- 5. Extrai os elementos pares do array  ---- */

export function extrairPares(numeros: number[]): number[] {
  return numeros.filter(numero => numero % 2 === 0);
}