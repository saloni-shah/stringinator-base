const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [1,2,3,4,5,6];
    expect(_.filter(nums, num => num%2 !== 0)).toEqual([1,3,5]);
  });

  it('filters an object to only numeric values', () => {
    const characterAttributes = {
      name: 'Thokul Mongothsbeard',
      honorific: 'Lord Thokul Mongothsbeard the Arcane',
      race: 'human',
      class: 'druid',
      strength: 4,
      constitution: 7,
      dexterity: 10,
      intelligence: 16,
      wisdom: 5,
      charisma: 4
    };
    const abilityScores = _.filter(characterAttributes, (value) => !isNaN(value));
    expect(abilityScores).toEqual([4, 7, 10, 16, 5, 4]);
  });
});