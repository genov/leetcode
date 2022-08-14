/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 1) return true;

  let normalized = "";
  for (const char of s) {
    if (char.match(/[a-z]|[A-Z]|[0-9]/g)) {
      normalized += char.toLowerCase();
    }
  }

  if (normalized.length === 0) return true;

  let left = 0;
  let right = normalized.length - 1;
  while (left < right) {
    if (normalized[left] !== normalized[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
