/**
 * 90. Subsets II
 * https://leetcode.com/problems/subsets-ii/
 */
var subsetsWithDup = function (nums) {
  const result = [];

  nums.sort();

  backtrack([], nums);

  return result;

  function backtrack(selected, left) {
    result.push(selected);

    for (let i = 0; i < left.length; i++) {
      if (left[i] !== left[i - 1]) {
        backtrack([...selected, left[i]], left.slice(i + 1));
      }
    }
  }
};
