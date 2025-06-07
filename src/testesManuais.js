"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var operacoesArrays_1 = require("./operacoesArrays");
// 1. Quadrado dos números (usando for)
var quadrados = [];
for (var i = 0; i < operacoesArrays_1.numeros.length; i++) {
    quadrados.push(Math.pow(operacoesArrays_1.numeros[i], 2));
}
console.log("Quadrado dos números:", quadrados); // [9, 25, 49, 64]
// 2. Juntar palavras com espaço
var frase = operacoesArrays_1.palavras.join(" ");
console.log("Frase:", frase); // "TypeScript é útil"
// 3. Ordenar palavras (alfabeticamente)
var ordenado = __spreadArray([], operacoesArrays_1.palavras, true).sort();
console.log("Palavras ordenadas:", ordenado); // ["TypeScript", "é", "útil"]
// 4. Pegar os 2 primeiros itens de um array
var doisPrimeiros = operacoesArrays_1.misto.slice(0, 2);
console.log("Dois primeiros:", doisPrimeiros); // ["zebra", 2]
// 5. Filtrar apenas números pares
var apenasPares = operacoesArrays_1.numeros.filter(function (num) { return num % 2 === 0; });
console.log("Números pares:", apenasPares); // [8]
