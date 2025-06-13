export function quadradoComFor(arr: number[]): number[] {
  let resultado: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    resultado.push(arr[i] * arr[i]);
  }
  return resultado;
}

export function quadradoComForEach(arr: number[]): number[] {
  let resultado: number[] = [];
  arr.forEach((num) => resultado.push(num * num));
  return resultado;
}

export function juntarComEspaco(arr: string[]): string {
  return arr.join(" ");
}


export function ordenarArray(arr: string[]): string[] {
  return arr.sort();
}

export function pegarDoisPrimeiros(arr: number[]): number[] {
  return arr.slice(0, 2);
}

export function filtrarPares(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}
