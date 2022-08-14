/**
 * 159. Longest Substring with At Most Two Distinct Characters
 * https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
 *
 * Middle | Sliding window, two pointers.
 */

var lengthOfLongestSubstringTwoDistinct = function (s) {
  const counts = {};
  let disctint = 0;
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < s.length) {
    const rightChar = s[right];

    if (!counts[rightChar]) {
      disctint++;
    }

    counts[rightChar] = (counts[rightChar] || 0) + 1;

    if (disctint < 3) {
      max = Math.max(max, right - left + 1);
    }

    while (disctint >= 3) {
      const leftChar = s[left];
      counts[leftChar]--;

      if (!counts[leftChar]) {
        disctint--;
      }

      left++;
    }

    right++;
  }

  return max;
};
