export function fatorial(n: number): number {
  if (n < 0) { // num negativo
    throw new Error('Fatorial não é definido para números negativos.');
  }
  if (n === 0) { // zero
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) { // num positivo
    resultado *= i;
  }
  return resultado;
}