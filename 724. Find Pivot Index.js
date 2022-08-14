/**
 * 724. Find Pivot Index
 *
 * https://leetcode.com/problems/find-pivot-index/
 */

// Let's say we knew S as the sum of the numbers, and we are at index i.
// If we knew the sum of numbers leftsum that are to the left of index i,
// then the other sum to the right of the index would just be S - nums[i] - leftsum.
var pivotIndex = function (nums) {
  let sum = 0;
  let leftSum = 0;

  for (const num of nums) {
    sum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};

// My approach.
var pivotIndex = function (nums) {
  const leftSums = [];
  const rightSums = [];

  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    leftSums[i] = leftSum;
  }

  let rightSum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    rightSum += nums[i];
    rightSums[i] = rightSum;
  }

  for (let i = 0; i < nums.length; i++) {
    if ((leftSums[i - 1] || 0) === (rightSums[i + 1] || 0)) {
      return i;
    }
  }

  return -1;
};
