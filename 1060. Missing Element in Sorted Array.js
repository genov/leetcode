/**
 * 1060. Missing Element in Sorted Array
 * https://leetcode.com/problems/missing-element-in-sorted-array/
 */

var missingElement = function (nums, k) {
  const n = nums.length;

  return binarySearch(nums, 0, n - 1) || nums[n - 1] + k;

  function missing(start, end) {
    return nums[end] - nums[start] - 1;
  }

  function binarySearch(nums, start, end) {
    if (start >= end) {
      return null;
    }

    if (end - start === 1 && missing(start, end) >= k) {
      return nums[start] + k;
    }

    const pivot = Math.round((start + end) / 2);
    const leftMissing = nums[pivot] - nums[start] + 1 - (pivot - start + 1);

    if (k > leftMissing) {
      k -= leftMissing;
      return binarySearch(nums, pivot, end);
    } else {
      return binarySearch(nums, start, pivot);
    }
  }
};
