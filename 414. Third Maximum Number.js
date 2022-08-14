/**
 * 414. Third Maximum Number
 * https://leetcode.com/problems/third-maximum-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const maximums = new Set();

  for (const num of nums) {
    maximums.add(num);

    if (maximums.size > 3) {
      maximums.delete(Math.min(...maximums));
    }
  }

  if (maximums.size === 3) {
    return Math.min(...maximums);
  }

  return Math.max(...maximums);
};
