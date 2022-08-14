/**
 * 487. Max Consecutive Ones II
 * https://leetcode.com/problems/max-consecutive-ones-ii/
 */

// My Approach.
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let onesCount = 0; // Count single 1s in parallel.

  // Iterate to the end.
  for (let i = 0; i < nums.length; i++) {
    // When see O, count 1s on the left and right side. (sliding window).
    if (nums[i] === 0) {
      let count = 1;
      let left = i - 1;
      let right = i + 1;

      while (nums[left] || nums[right]) {
        if (nums[left]) {
          count++;
          left--;
        }
        if (nums[right]) {
          count++;
          right++;
        }
      }

      onesCount = 0; // Reset 1s counter if current is 0.
      max = Math.max(count, max);
    } else {
      onesCount++;
      max = Math.max(onesCount, max);
    }
  }

  return max;
};
