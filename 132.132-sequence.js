/**
 * Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i],
 *  nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j]. Return true if there is
 *  a 132 pattern in nums, otherwise, return false.
 * IMPLEMENTATION:
 * 1. Have a stack, each time we store a new number, we first pop out all numbers that are smaller than that number. The numbers that are popped out becomes candidate for s3.
 * 2. We keep track of the maximum of such s3 (which is always the most recently popped number from the stack).
 * 3. Once we encounter any number smaller than s3, we know we found a valid sequence since s1 < s3 implies s1 < s2.
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let s3 = Number.MIN_SAFE_INTEGER;
  const stack = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < s3) {
      return true;
    }

    while (stack.length && stack[stack.length - 1] < nums[i]) {
      s3 = stack.pop();
    }

    stack.push(nums[i]);
  }

  return false;
};
