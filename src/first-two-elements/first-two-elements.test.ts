import { firstTwoElements } from './firstTwoElements'

test("The first two elements of the array [2, 4, 6, 2, 8, 9, 5] expects to be [2, 4]", () => {
  const arr = [2, 4, 6, 2, 8, 9, 5]
  const result = firstTwoElements(arr);
  expect(arr).toBe(result)
})