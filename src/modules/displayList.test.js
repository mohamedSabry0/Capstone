import { totalItems } from './displayList.js';

const dummyObject = [
  {
    name: 'toyota',
    model: '1996',
  },
  {
    name: 'Chevrolet',
    model: '2019',
  },
  {
    name: 'Chevrolet',
    model: '2019',
  },
  {
    name: 'Chevrolet',
    model: '2019',
  },
];

describe('The test for number of objects in array', () => {
  test('Test number of objects', () => {
    expect(totalItems(dummyObject)).toBe(4);
  });
});
