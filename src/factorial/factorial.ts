function factorial(n: number): number {
    let facto = 1;
    for(let i = 1; i <= n; i++) {
        facto = facto * i;
    }
    return(facto)
}
    