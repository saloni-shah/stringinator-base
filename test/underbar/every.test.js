const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1,2,3,4];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1,3,5,7,9];
      expect(_.every(nums, num => num%2 !== 0)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1,2,5,7,9,10];
      expect(_.every(nums, num => num%2 === 1)).toBe(false);
    });

  });
});