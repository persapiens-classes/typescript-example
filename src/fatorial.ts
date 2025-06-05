export function fatorial(n: number): number {
  if (n < 0) {
    throw new Error("fatorial não é definido para números negativos.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}