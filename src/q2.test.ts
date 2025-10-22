import { juntarStrings } from "./q2"; 

test("concatena as strings com um espaço entre elas", () => {
  expect(juntarStrings(["Arrays", "com", "TypeScript"])).toBe("Arrays com TypeScript");
});
