let animal = 'cavalo'

switch(animal) {
    case 'vaca': console.log('A vaca foi selecionada.')
    break;
    case 'cavalo': console.log('O cavalo foi selecionado.')
    break;
    default:
        animal = 'Não detectado'
}

console.log(`${animal} foi selecionado`)



// Funções simples
function numero_n1_n2(n1:number, n2:number){
    return n1 * n2
}

//Funções anônimas
let result = function(n1:number, n2:number) {return n1*n2}

// Recursão
var foo = function bar(){
    bar() // ou
    arguments.callee() // ou
    foo()
}

// Arrow functions
const mult = (n1:number, n2: number) =>{
    return n1*n2
}


const materiais = ["Hidrogênio", "Lítio", "manganês", "Magnésio", "Nitrogênio", "Estrogênio"]
materiais.push("Hélio") // adicionando na lista

let tamanhos = materiais.map(material => material.length)
console.log(tamanhos)

let filtragem = materiais.filter( material => material.length > 6)
let filtragem2 = materiais.filter( material => material[0] == "M" || material[0] == "m")
console.log(filtragem)
console.log(filtragem2)

materiais.forEach(i => console.log(`Material: ${i}`))


// Uma função que tem como parametros uma função e um array
function map(f: (x: number) => number, a: number[]) : number[] {
    let result=[];
    let i;
    for (i = 0; i!= a.length; i++){
        result[i] = f(a[i])
    }
    return result
}