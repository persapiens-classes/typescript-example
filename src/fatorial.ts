const fatorial = (n : number) => {
    if (n >= 0){
        let cont = 1;
        for (let i = n; i > 0; i--){
            cont *= i;
        }
        return cont;
    }
    else throw new Error("Não existe fatorial de número negativo");
 
};

export default fatorial;