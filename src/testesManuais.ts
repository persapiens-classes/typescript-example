import { numeros, palavras, misto } from './operacoesArrays';

// 1. Quadrado dos números (usando for)
const quadrados: number[] = [];
for (let i = 0; i < numeros.length; i++) {
  quadrados.push(numeros[i] ** 2);
}
console.log("Quadrado dos números:", quadrados); // [9, 25, 49, 64]

// 2. Juntar palavras com espaço
const frase = palavras.join(" ");
console.log("Frase:", frase); // "TypeScript é útil"

// 3. Ordenar palavras (alfabeticamente)
const ordenado = [...palavras].sort();
console.log("Palavras ordenadas:", ordenado); // ["TypeScript", "é", "útil"]

// 4. Pegar os 2 primeiros itens de um array
const doisPrimeiros = misto.slice(0, 2);
console.log("Dois primeiros:", doisPrimeiros); // ["zebra", 2]

// 5. Filtrar apenas números pares
const apenasPares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", apenasPares); // [8]