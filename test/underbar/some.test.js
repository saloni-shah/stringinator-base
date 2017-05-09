const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 !== 0)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 8, 6];
    expect(_.some(nums, num => num % 2 !== 0)).toBe(false);
  });

});