/**
 * 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */

// O(N) Quicksort approach.
var findKthLargest = function (nums, k) {
  const largestIndex = nums.length - k; // 4

  return findLargest(nums, 0, nums.length - 1);

  function findLargest(nums, low, high) {
    const pivot = partition(nums, low, high);

    if (largestIndex === pivot) {
      return nums[pivot];
    }

    if (largestIndex < pivot) {
      return findLargest(nums, low, pivot - 1);
    } else {
      return findLargest(nums, pivot + 1, high);
    }
  }

  function partition(nums, low, high) {
    const pivot = nums[low];
    let i = low;
    let j = high;

    while (i < j) {
      while (nums[i] <= pivot) {
        i++;
      }

      while (nums[j] > pivot) {
        j--;
      }

      if (i >= j) {
        break;
      }

      swap(nums, i, j);
    }

    swap(nums, low, j);

    return j; // Return swapped value (original pivot);
  }

  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
};
