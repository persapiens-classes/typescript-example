export function factorial(n: number): number {
    if (n < 0) throw new Error("It doenst exist the factorial of a negative number");
    if (!Number.isInteger(n)) throw new Error("Input must be a non-negative integer");
    let facto = 1;
    for(let i = 1; i <= n; i++) {
        facto = facto * i;
    }
    return(facto)
}
    