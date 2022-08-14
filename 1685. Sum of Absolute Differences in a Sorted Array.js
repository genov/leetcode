/**
 * 1685. Sum of Absolute Differences in a Sorted Array
 * https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/
 */
var getSumAbsoluteDifferences = function (nums) {
  const result = [];
  const cache = {}; // Cache sums for same numbers.

  // Calculate sum of all nums as Sum of Absolute Differences for 0.
  let sum = nums.reduce((sum, num) => sum + num);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (cache[num] >= 0) {
      sum = cache[num];
    } else {
      // Number of elements on the right.
      const rightCount = nums.length - i - 1;

      // Diff of current num and previous.
      const diff = num - (nums[i - 1] || 0);

      // Update sum for previous number based on difference between
      // current and previous.
      sum = sum + i * diff - diff - rightCount * diff;
      cache[num] = sum;
    }

    result[i] = sum;
  }

  return result;
};
