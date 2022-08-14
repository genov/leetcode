/**
 * 4. Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

// Merge, then find median.
var findMedianSortedArrays = function (nums1, nums2) {
  const nums = [];
  let i = 0;
  let j = 0;
  let index = 0;

  // Use sorting algorythim from MergeSort.
  while (i < nums1.length || j < nums2.length) {
    if (i > nums1.length - 1) {
      nums[index] = nums2[j]; // Fill from 2nd when 1st is done.
      j++;
    } else if (j > nums2.length - 1) {
      nums[index] = nums1[i]; // Fill from 1st when 2nd is done.
      i++;
    } else {
      // Take the smallest and add to result.
      // Increate pointer of used array.
      if (nums1[i] <= nums2[j]) {
        nums[index] = nums1[i];
        i++;
      } else {
        nums[index] = nums2[j];
        j++;
      }
    }
    index++;
  }

  // 2 cases for median: Even length and Odd length.
  let median;
  if (nums.length % 2 === 0) {
    // Take two elements for Even case.
    median = (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  } else {
    // Take middle element for Odd case.
    median = nums[Math.floor(nums.length / 2)];
  }

  return median;
};
