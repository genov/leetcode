/**
 * 78. Subsets
 * https://leetcode.com/problems/subsets/
 */
var subsets = function (nums) {
  const result = [];

  backtrack([], nums);

  return result;

  function backtrack(selected, left) {
    result.push(selected);

    for (let i = 0; i < left.length; i++) {
      backtrack([...selected, left[i]], left.slice(i + 1));
    }
  }
};
