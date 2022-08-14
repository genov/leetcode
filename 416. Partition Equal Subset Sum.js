/**
 * 416. Partition Equal Subset Sum
 * https://leetcode.com/problems/partition-equal-subset-sum/
 */

/** DP */
/**
 * https://www.youtube.com/watch?v=IsvocB5BJhw
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  if (nums.length < 2) {
    return false;
  }

  const sum = nums.reduce((acc, item) => acc + item, 0);

  if (sum % 2 > 0) {
    return false;
  }

  const target = sum / 2;
  let set = new Set();
  set.add(0);

  for (let num of nums) {
    const tmpSet = new Set();

    for (let setNum of set) {
      tmpSet.add(setNum);
      tmpSet.add(num + setNum);
    }

    set = tmpSet;

    if (set.has(target)) {
      return true;
    }
  }

  return false;
};

/** DFS + memoization */
var canPartition = function (nums) {
  if (nums.length < 2) {
    return false;
  }

  const sum = nums.reduce((acc, item) => acc + item, 0);

  if (sum % 2 > 0) {
    return false;
  }

  const target = sum / 2;
  const memo = new Map();

  function dp(i, capacity) {
    if (capacity === 0) {
      return true;
    }

    if (i > nums.length - 2 || capacity < 0) {
      return false;
    }

    if (!memo.has(`${i}-${capacity}`)) {
      memo.set(
        `${i}-${capacity}`,
        dp(i + 1, capacity - nums[i]) || dp(i + 1, capacity)
      );
    }

    return memo.get(`${i}-${capacity}`);
  }

  return dp(0, target);
};
