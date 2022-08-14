/**
 * 448. Find All Numbers Disappeared in an Array
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
var findDisappearedNumbers = function (nums) {
  const results = new Set();

  for (let i = 1; i <= nums.length; i++) {
    results.add(i);
  }

  for (let i = 0; i <= nums.length; i++) {
    if (results.has(nums[i])) {
      results.delete(nums[i]);
    }
  }

  return [...results];
};
