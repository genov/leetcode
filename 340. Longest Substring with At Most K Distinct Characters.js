/**
 * 340. Longest Substring with At Most K Distinct Characters
 * https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
 *
 * Middle | Sliding window, two pointers.
 */

var lengthOfLongestSubstringKDistinct = function (s, k) {
  const counts = {}; // Count characters occurance.
  let max = 0; // Keeps max length so far.
  let left = 0; // L pointer.
  let right = 0; // R pointer.
  let distinct = 0; // Count distincs characters.

  // Iterate until R pointer reaches S end.
  while (right < s.length) {
    const rightChar = s[right];

    // Increment num of distinct characters when current char is not seen.
    if (!counts[rightChar]) {
      distinct++;
    }

    // Update character counter.
    counts[rightChar] = (counts[rightChar] || 0) + 1;

    // Update result only when number of distinct characters is valid.
    if (distinct <= k) {
      max = Math.max(max, right - left + 1);
    }

    // Narrow down window from left side while distinct characters is invalid
    // and update counters.
    while (distinct > k) {
      const leftChar = s[left];
      counts[leftChar]--;
      if (!counts[leftChar]) {
        distinct--;
      }
      left++;
    }

    right++;
  }

  return max;
};
