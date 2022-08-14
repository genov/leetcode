/**
 * 698. Partition to K Equal Sum Subsets
 * https://www.youtube.com/watch?v=mBk4I0X46oI
 */

/** Backtracking approach. */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  const sum = nums.reduce((acc, item) => acc + item, 0);
  const target = sum / k;
  const used = Array(nums.length).fill(false);

  if (sum % k > 0) {
    return false;
  }

  function backtrack(i, kLeft, currentSum) {
    if (kLeft === 0) {
      return true;
    }

    if (currentSum === target) {
      return backtrack(0, kLeft - 1, 0);
    }

    for (let j = i; j < nums.length; j++) {
      if (used[j] || currentSum + nums[j] > target) continue;

      used[j] = true;

      if (backtrack(j + 1, kLeft, currentSum + nums[j])) {
        return true;
      }

      used[j] = false;
    }

    return false;
  }

  return backtrack(0, k, 0);
};
