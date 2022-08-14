/**
 * 259. 3Sum Smaller
 *
 * https://leetcode.com/problems/3sum-smaller/
 */

// Solution : two pointers approach while pivot is on i element.
// if low + hi < target -> add difference between low and hi to sum and increment low
// OR decrement hi.
// On each step add result of tow pointers function to results.
var threeSumSmaller = function (nums, target) {
  let sum = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    sum += twoSumSmaller(nums, i + 1, target - nums[i]);
  }

  return sum;

  function twoSumSmaller(nums, startIdx, target) {
    let sum = 0;
    let lo = startIdx;
    let hi = nums.length - 1;

    while (lo < hi) {
      if (nums[lo] + nums[hi] < target) {
        sum += hi - lo;
        lo++;
      } else {
        hi--;
      }
    }

    return sum;
  }
};
