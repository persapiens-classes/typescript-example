export function arraySquare(arrNumbers: number[]): number[] {
  let squaredNumbers: number[] = []

  for (let i = 0; i < arrNumbers.length; i++) {
    squaredNumbers.push(arrNumbers[i] * arrNumbers[i]);
  }
  return squaredNumbers;
}

const testArray = [3, 5, 7, 3, 8, 9, 1]
console.log(arraySquare(testArray))

export function arraySquareForEach(arrNumbers: number[]) {
  let squaredNumbers: number[] = []

  arrNumbers.forEach((num) => {
    squaredNumbers.push(num * num)
  })
  return squaredNumbers;
}

console.log(arraySquareForEach(testArray))

