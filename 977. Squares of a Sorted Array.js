/**
 * 977. Squares of a Sorted Array
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 */

// Compare absolute of left and right and add highest to result array.
var sortedSquares = function (nums) {
  const sorted = [];

  while (nums.length) {
    let el;

    if (Math.abs(nums[0]) >= Math.abs(nums[nums.length - 1])) {
      el = nums.shift();
    } else {
      el = nums.pop();
    }

    sorted.unshift(el ** 2);
  }

  return sorted;
};
