/**
 * 15. 3Sum (O(N**2))(medium)
 *
 * https://leetcode.com/problems/3sum/
 */

// Solution:
// Double loop:
// Fix the pivot and perform Two sum approach for the rest of the array.

var threeSum = function (nums) {
  const results = [];

  // Sort to avoid duplicates.
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    const seen = new Set();
    for (let j = i + 1; j < nums.length; j++) {
      const complement = 0 - nums[i] - nums[j];
      if (seen.has(complement)) {
        const result = [nums[i], complement, nums[j]];
        results.push(result);

        // Skip repeating character to avid dubplicates.
        while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
          j++;
        }
      } else {
        seen.add(nums[j], j);
      }
    }
  }

  return results;
};
