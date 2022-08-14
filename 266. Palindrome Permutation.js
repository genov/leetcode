/**
 * 266. Palindrome Permutation
 * https://leetcode.com/problems/palindrome-permutation/
 */
var canPermutePalindrome = function (s) {
  const keys = new Set();

  for (let i = 0; i < s.length; i++) {
    if (!keys.has(s[i])) {
      keys.add(s[i]);
    } else {
      keys.delete(s[i]);
    }
  }

  return keys.size === 0 || keys.size === 1;
};
