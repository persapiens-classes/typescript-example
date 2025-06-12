export function calcularQuadradoComFor(numeros: number[]): number[] {
  const quadrados: number[] = [];
  for (let i = 0; i < numeros.length; i++) {
    quadrados.push(numeros[i] * numeros[i]);
  }
  return quadrados;
}

export function calcularQuadradoComForEach(numeros: number[]): number[] {
  const quadrados: number[] = [];
  numeros.forEach(numero => {
    quadrados.push(numero * numero);
  });
  return quadrados;
}

export function concatenarStrings(palavras: string[]): string {
  return palavras.join(' ');
}

export function ordenarElementos(elementos: string[]): string[] {
  return elementos.slice().sort();
}

export function pegarDoisPrimeiros(elementos: number[]): number[] {
  return elementos.slice(0, 2);
}

export function filtrarPares(numeros: number[]): number[] {
  return numeros.filter(numero => numero % 2 === 0);
}