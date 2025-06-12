import { concatenateArrayStrings } from "./concatenate-array-string";

test("concatenateArrayStrings should concatenate array of strings", () => {
  const arr = ['Arrays', 'com', 'TypeScript'];
  const result = concatenateArrayStrings(arr);
  expect(result).toBe('Arrays com TypeScript');
});