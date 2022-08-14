/**
 * 238. Product of Array Except Self
 *
 * https://leetcode.com/problems/product-of-array-except-self/
 */

// Inspiration (my approach):
// Creat tow arrays from fill 1st with product to the left from i
// And fill 2nd with product to the right of i.

// Solution:
// Create array and fill as in Approach Inspiration (product to the left).
// Instead of another products array, keep latest running product.

var productExceptSelf = function (nums) {
  const answer = [1];
  for (let i = 1; i < nums.length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }

  let runningProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * runningProduct;
    runningProduct *= nums[i];
  }

  return answer;
};
