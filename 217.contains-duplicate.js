/**
 * 217. Contains Duplicate
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array,
 *  and it should return false if every element is distinct.
 * https://leetcode.com/problems/contains-duplicate/
 */

/** O(NLogN) No datastuctures. */
var containsDuplicate1 = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }

  return false;
};

/** O(n), HashMap */
var containsDuplicate2 = function (nums) {
  const counts = {};

  if (!nums.length || nums.length === 1) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]] = counts[nums[i]] ? counts[nums[i]] + 1 : 1;

    if (counts[nums[i]] > 1) {
      return true;
    }
  }

  return false;
};
