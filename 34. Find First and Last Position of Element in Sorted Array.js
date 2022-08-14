/**
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

/** O(logN) */
// Binary Search approach.
// Run BS search two times:
// First to find starting index
// Second is to fing ending index.
// The difference in searches is defining pivot when pivot equals to target
// When looking for start - go left.
// When looking for end - go right.
var searchRange = function (nums, target) {
  const start = findStart();
  const end = findEnd();

  return [start, end];

  function findStart() {
    let index = -1;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
        index = mid;
      }

      if (nums[mid] >= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return index;
  }

  function findEnd() {
    let index = -1;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
        index = mid;
      }

      if (nums[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return index;
  }
};
