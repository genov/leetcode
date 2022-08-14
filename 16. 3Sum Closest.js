/**
 * 16. 3Sum Closest
 * https://leetcode.com/problems/3sum-closest/
 */

// Solution:
// Iterate throught the array.
// Set pivot to i element, set hi to i+1, set lo to last index.
// Set diff to largets number and copmare absolute sum of
// target - nums[i] + nums[hi] + nums[low] with current value of diff
// Update diff value with the lowest absolute number.

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let diff = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let lo = i + 1;
    let hi = nums.length - 1;

    while (lo < hi) {
      const sum = nums[i] + nums[lo] + nums[hi];

      if (Math.abs(target - sum) < Math.abs(diff)) {
        diff = target - sum;
      }

      if (sum < target) {
        lo++;
      } else {
        hi--;
      }
    }
  }

  return target - diff;
};
