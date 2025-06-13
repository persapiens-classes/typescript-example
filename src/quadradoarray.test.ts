import { quadradoarrayfor } from './quadradoarray';
import { quadradoarrayforeach } from './quadradoarray';

test('quadrados de [3,5,7,3,8,9,1]', () => {
  expect(quadradoarrayfor([3,5,7,3,8,9,1])).toEqual([9,25,49,9,64,81,1]);
});

test('quadrados de [3,5,7,3,8,9,1]', () => {
  expect(quadradoarrayforeach([3,5,7,3,8,9,1])).toEqual([9,25,49,9,64,81,1]);
});