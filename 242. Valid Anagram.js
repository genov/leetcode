/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = {};

  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!count[t[i]]) return false;
    count[t[i]]--;
    if (count[t[i]] < 0) return false;
  }

  return true;
};
