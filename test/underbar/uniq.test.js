const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 6, 2, 6, 5];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 6,]);
  });
});