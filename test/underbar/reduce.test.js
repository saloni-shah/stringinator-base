const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1,2,3,4,5];
    expect(_.reduce(nums, (sum,val) => sum = sum + val, 0)).toBe(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1,2,3,4,5];
    expect(_.reduce(nums, (sum,val) => sum = sum + val)).toBe(15);
  });

});