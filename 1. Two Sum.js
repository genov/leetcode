/**
 *
 * 1. Two Sum (easy)
 * https://leetcode.com/problems/two-sum/
 */

var twoSum = function (nums, target) {
  const comps = {}; // For each number keep complimetary to target and it's index.

  for (let i = 0; i < nums.length; i++) {
    if (comps[nums[i]] >= 0) {
      // If current number is someone's complementary, return store index and curretn index.
      return [comps[nums[i]], i];
    } else {
      // Store complimetary to target and it's index
      comps[target - nums[i]] = i;
    }
  }

  return [];
};
