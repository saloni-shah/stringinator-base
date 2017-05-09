const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [1,2,3,4,5];
    expect(_.reject(nums, (num) => num % 2 !== 0)).toEqual([2,4]);
  });

  it('rejects null values from an object', () => {
    const obj = {
      a: 'fruit',
      b: 'vegetables',
      c: null,
      d: 'chips',
      e: null
    };
    expect(_.reject(obj, (value) => value === null)).toEqual(['fruit', 'vegetables', 'chips']);
  });
});