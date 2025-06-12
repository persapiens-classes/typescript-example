import { sortArrayAlphabetically } from "./sort-array-alphabetically";

test("The array ['Carro', 'boneco', 'ave', 'lapis'] sorted alphabetically expects to be", () => {
  const arr = ['Carro', 'boneco', 'ave', 'lapis'];
  const result = sortArrayAlphabetically(arr);
  expect(arr).toBe(result)
})