export const fatorial = (a: number): number => { 
    let x = 1;
    while (a > 0){
        x = x * a;
        a -= 1;
    }
    return x;
};
