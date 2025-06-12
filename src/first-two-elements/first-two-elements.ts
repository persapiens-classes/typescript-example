let arr: string[] = [2, 4, 6, 2, 8, 9, 5]

export function firstTwoElements(arr: string[]) {
    let newArray = arr.slice(0, 2)
    return newArray
}

console.log(firstTwoElements(arr))