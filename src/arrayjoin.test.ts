import { arrayjoin } from './arrayjoin';

test('join separando por espaço', () => {
  expect(arrayjoin(["Arrays", "com", "TypeScript"])).toEqual("Arrays com TypeScript");
});
