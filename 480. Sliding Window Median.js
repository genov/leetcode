/**
 * 480. Sliding Window Median (hard)
 *
 * https://leetcode.com/problems/sliding-window-median/
 */

var medianSlidingWindow = function (nums, k) {
  const sorted = []; // Helper array for Binary Insertion.
  const medians = []; // Keeps results.

  // Sort 1st window.
  for (let i = 0; i < k; i++) {
    const index = bs(nums[i], sorted);
    sorted.splice(index, 0, nums[i]);
  }

  // Return median window is the size of the array.
  if (nums.length === k) {
    return [getMedian(sorted)];
  }

  // - Using binary search find index if 1st and next
  //   elements from nums in sorted array.
  // - Remove 1st and inset next element.
  // - Find new median and add to results.
  for (let i = 0; i <= nums.length - k; i++) {
    medians[i] = getMedian(sorted);
    const toRemove = bs(nums[i], sorted);
    sorted.splice(toRemove, 1);
    const toAdd = bs(nums[i + k], sorted);
    sorted.splice(toAdd, 0, nums[i + k]);
  }

  return medians;

  /** Gets media of the array. */
  function getMedian(array) {
    if (array.length % 2 === 0) {
      return (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
    } else {
      return array[(array.length - 1) / 2];
    }
  }

  /** Binary Insertion Sort - finds index for element in sorted array. */
  function bs(num, sorted) {
    if (!sorted.length) {
      return 0;
    }

    if (sorted.length === 1) {
      const index = num <= sorted[0] ? 0 : 1;
      return index;
    }

    let start = 0;
    let end = sorted.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (num === sorted[mid]) {
        return mid;
      } else if (num < sorted[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return start;
  }
};
