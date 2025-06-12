let arr = ['Arrays', 'com', 'TypeScript']

export function concatenateArrayStrings(array: string[]) {
  return array.join(' ');
}

console.log(concatenateArrayStrings(arr))