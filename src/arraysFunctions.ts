// ===============================
// 1. Quadrado dos elementos
// ===============================

// a) Usando for simples
function quadradoForSimples(arr: number[]): number[] {
  const resultado: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    resultado.push(arr[i] ** 2);
  }
  return resultado;
}

// b) Usando forEach
function quadradoForEach(arr: number[]): number[] {
  const resultado: number[] = [];
  arr.forEach((num) => resultado.push(num ** 2));
  return resultado;
}

// Teste 1.1
const arrayNumeros = [3, 5, 7, 3, 8, 9, 1];
console.log("1.a Quadrado (for):", quadradoForSimples(arrayNumeros));
console.log("1.b Quadrado (forEach):", quadradoForEach(arrayNumeros));


// ===============================
// 2. Concatenar strings com JOIN
// ===============================

// Aqui o método join não recebe uma função diretamente, mas podemos usar arrow function para definir o separador.
function concatenarComEspaco(arr: string[]): string {
  return arr.join(" ");
}

// Teste 2.1
const arrayStrings = ["Arrays", "com", "TypeScript"];
console.log("2. JOIN com espaço:", concatenarComEspaco(arrayStrings));


// ===============================
// 3. Ordenar array decrescentemente
// ===============================

function ordenarDecrescente(arr: string[]): string[] {
  return arr.sort((a, b) => b.localeCompare(a)); // ordem decrescente
}

// Teste 3.1
const arrayPalavras = ["carro", "boneco", "ave", "lapis"];
console.log("3. Sort decrescente:", ordenarDecrescente(arrayPalavras));


// ===============================
// 4. Pegar os dois primeiros elementos
// ===============================

function pegarDoisPrimeiros(arr: number[]): number[] {
  return arr.slice(0, 2);
}

// Teste 4.1
const arrayNumeros2 = [2, 4, 6, 2, 8, 9, 5];
console.log("4. Slice (2 primeiros):", pegarDoisPrimeiros(arrayNumeros2));


// ===============================
// 5. Extrair elementos pares (FILTER)
// ===============================

function filtrarPares(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}

// Teste 5.1
const arrayNumeros3 = [8, 3, 9, 5, 6, 12];
console.log("5. Filter (pares):", filtrarPares(arrayNumeros3));


// ===============================
// 6. Classes e Interface
// ===============================

interface Equipamento {
  exibirDescricao(): string;
}

class Computador implements Equipamento {
  marca: string;
  memoriaRAM: number; // em GB

  constructor(marca: string, memoriaRAM: number) {
    this.marca = marca;
    this.memoriaRAM = memoriaRAM;
  }

  exibirDescricao(): string {
    return `Computador ${this.marca} com ${this.memoriaRAM}GB de RAM.`;
  }
}

class Impressora implements Equipamento {
  modelo: string;
  tipo: string; // Ex: "Laser", "Jato de tinta"

  constructor(modelo: string, tipo: string) {
    this.modelo = modelo;
    this.tipo = tipo;
  }

  exibirDescricao(): string {
    return `Impressora ${this.modelo} do tipo ${this.tipo}.`;
  }
}

// Teste 6.5
const pc = new Computador("Dell", 16);
const printer = new Impressora("HP DeskJet", "Jato de tinta");

console.log("6.a:", pc.exibirDescricao());
console.log("6.b:", printer.exibirDescricao());

// Alterando atributos e testando novamente
pc.memoriaRAM = 32;
printer.tipo = "Laser";

console.log("6.a (atualizado):", pc.exibirDescricao());
console.log("6.b (atualizado):", printer.exibirDescricao());

export { quadradoForSimples, filtrarPares, ordenarDecrescente, 
    quadradoForEach, concatenarComEspaco , pegarDoisPrimeiros
};
