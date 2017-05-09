const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  const result = _.reject(str, item => {
    return item === target;
  });
  return result.join('').toString();
};

const hasChar = function(str, target) {
  return _.some(str, element => element === target);
};

const isOnlyDigits = function(str) {
  return _.every(str, element =>  !isNaN(element));
};

const filterToOnlyDigits = function(str) {
  const result = _.filter(str, element => {
    return !isNaN(element) && element != ' ';
  });
  return result.join('').toString();
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  const results = [];
  _.each(obj, (value, key, iterateObj) => {
    results.push(truncateString(value, maxLength));
  });
  return results;
};

const countChars = function(str) {
  const countChar = {};
  _.each(str, item => 
    (countChar[item]) ? countChar[item]++ : countChar[item] = 1 );
  return countChar;
};

const dedup = function(str) {
  const uniqArr = _.uniq(str);
  return uniqArr.join('').toString();
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};