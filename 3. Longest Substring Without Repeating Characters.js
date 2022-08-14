/**
 * 3. Longest Substring Without Repeating Characters (medium).
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
var lengthOfLongestSubstring = function (s) {
  const counts = {}; // Count all unique characters.
  let left = 0; // L pointer
  let right = 0; // R pointer
  let max = 0; // Result.

  while (right < s.length) {
    const char = s[right];

    // Count all apearing characters.
    counts[char] = (counts[char] || 0) + 1;

    // If current character is unique update results as length between pointers.
    if (counts[char] <= 1) {
      max = Math.max(max, right - left + 1);
    }

    // If character appears more than 1, start moving L pointer until
    // character count is unique.
    while (counts[char] > 1) {
      const leftChar = s[left];
      counts[leftChar]--;
      left++;
    }

    // Move R pointer again.
    right++;
  }

  // Return max.
  return max;
};
