// 1.a - Usando for simples
export function calculaQuadradoFor(numeros: number[]): number[] {
  const resultado: number[] = [];
  for (let i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] * numeros[i]);
  }
  return resultado;
}

// 1.b - Usando forEach
export function calculaQuadradoForEach(numeros: number[]): number[] {
  const resultado: number[] = [];
  numeros.forEach(numero => {
    resultado.push(numero * numero);
  });
  return resultado;
}

// 2. Concatenando String
export function concatenarStrings(palavras: string[]): string {
  // O método join já faz a concatenação, o espaço é o separador.
  return palavras.join(' ');
}

// 3. Ordenando elementos com Sort
export function ordenarDecrescente(elementos: string[]): string[] {
  return elementos.sort((a, b) => b.localeCompare(a));
}

// 4.  Pegando os Dois Primeiros Elementos com slice
export function pegarDoisPrimeiros(elementos: any[]): any[] {
  return elementos.slice(0, 2);
}

//5. Extraindo Elementos Pares com filter
export function filtrarPares(numeros: number[]): number[] {
  return numeros.filter(numero => numero % 2 === 0);
}