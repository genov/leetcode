/**
 * 1189. Maximum Number of Balloons
 * https://leetcode.com/problems/maximum-number-of-balloons/
 */

// O(N)
var maxNumberOfBalloons = function (text) {
  const dictionary = {};
  const counts = {};
  let max = Number.MAX_VALUE;

  for (const char of "balloon") {
    dictionary[char] = (dictionary[char] || 0) + 1;
  }

  for (const char of text) {
    if (dictionary[char]) {
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  if (Object.keys(dictionary).length !== Object.keys(counts).length) {
    return 0;
  }

  for (const char of Object.keys(counts)) {
    max = Math.min(max, Math.floor(counts[char] / dictionary[char]));
  }

  return max;
};
