function multiplicar (n1: number, n2: number) :number {
  return n1 * n2;
}
//console.log(multiplicar(2,1));

let multiplicar2 = function (n1: number, n2: number) :number {
  return n1 * n2;
}
//console.log(multiplicar2(1,2));

let multiplicar3 = (n1: number, n2: number) => n1 * n2;
//console.log(multiplicar3(1,2));






const materiais = [ "hidrogenio", "helio", "litio", "berilio"];

//materiais.forEach( material => { console.log(material) } );
const tamanhos :number[] = materiais.map( 
  mat => mat.length
 );
//console.log(tamanhos);

console.log(materiais.some( mat => mat.length < 6))
console.log(materiais.every( mat => mat.length < 6))
//console.log(materiais.find( mat => mat.length < 6))
//console.log(materiais.filter( mat => mat.length < 6))








for (const material of materiais) {
  //console.log(material)
}
for (const index in materiais) {
  //console.log(index)
}


function map(f: (x: number) => number, arrei: number[]) {
  let result = [];
  for (const numero of arrei) {
    result.push(f(numero));
  }
  return result;
}

let funcao = (x: number) => x*x*x;
let a = [0,1,2,5,10];
let resultado = map ( (x: number) => x*x*x, a);
//console.log (resultado);

//console.log (map ( (x: number) => x*x*x, [0,1,2,5,10]));