const crypto = require('crypto');
const { compareObjectsAsStrings, compareObjects } = require('./compare-object');
const { generateFakeObject } = require('./faccio');

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
});

describe('Benchmark tests', () => {
  let obj1;
  let obj2;

  beforeAll(() => {
    obj1 = generateFakeObject(1000);
    obj2 = generateFakeObject(1000);
  })

  test('First test', () => {
    console.time('compare as strings timer');
    const result = compareObjects(obj1, obj2);
    console.timeEnd('compare as strings timer')

    expect(result).toBeTruthy();
  })

  test('Second test', () => {
    console.time('compare iteratively timer');
    compareObjectsAsStrings(obj1, obj2);
    console.timeEnd('compare iteratively timer');
  })
});
