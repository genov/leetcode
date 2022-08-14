/**
 * 33. Search in Rotated Sorted Array.
 *
 * You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.
 * Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 *  If target is found in the array return its index, otherwise, return -1.
 *
 *  * https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let pivot = Math.round((start + end) / 2);

    if (nums[pivot] === target) {
      return pivot;
    }

    const isLeftNonRotated = nums[pivot] >= nums[start];
    if (isLeftNonRotated) {
      if (target >= nums[start] && target < nums[pivot]) {
        end = pivot - 1;
      } else {
        start = pivot + 1;
      }
    } else {
      if (target > nums[pivot] && target <= nums[end]) {
        start = pivot + 1;
      } else {
        end = pivot - 1;
      }
    }
  }

  return -1;
};
