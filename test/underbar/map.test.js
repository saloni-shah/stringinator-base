const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    expect(_.map([1,2,3,4], value => (value * value))).toEqual([1,4,9,16]);
  });
});