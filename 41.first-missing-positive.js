/**
 * 41. First Missing Positive
 *
 * Given an unsorted integer array nums, find the smallest missing positive integer.
 *
 * https://leetcode.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const sorted = nums.sort((a, b) => a - b);
  let isMinSeen = false;
  let smallest;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === 1) {
      isMinSeen = true;
    }

    if (!smallest && sorted[i + 1] - sorted[i] >= 2) {
      if (sorted[i] + 1 > 0) {
        smallest = sorted[i] + 1;
      }
    }
  }

  if (!isMinSeen) {
    return 1;
  }

  smallest = smallest ? smallest : sorted[sorted.length - 1] + 1;

  return smallest;
};
