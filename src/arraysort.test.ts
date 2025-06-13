import { arraysort } from "./arraysort";

test('ordenando array: ', () => {
  expect(arraysort(["carro", "boneco", "ave", "lapis"])).toEqual(["ave", "boneco", "carro", "lapis"]);
});
