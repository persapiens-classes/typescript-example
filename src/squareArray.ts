let numbers = [1, 2, 3, 4, 5];


// for(let i = 0; i < numbers.length; i++){ 
//     numbers[i] *= numbers[i];
// }

// console.log(numbers);

export function squareArray(numbers: number[]): number[] { 
    
    for(let i = 0; i < numbers.length; i++){ 
        numbers[i] *= numbers[i];
    }
    return numbers;
}

export function squareArrayForEach(numbers: number[]): number[]{ 
    numbers.forEach((num, index) =>{ 
        numbers[index] = num * num;
    });

    return numbers;
}