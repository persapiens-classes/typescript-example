export function  fatorial(n : number): number{
    let resultado = 1;
    for ( let i = n; i >1 ; i--){
        resultado *=  i ; 
    }
    return resultado

}
