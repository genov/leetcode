/**
 * 47. Permutations II
 * https://leetcode.com/problems/permutations-ii/
 *
 * Approach is the same as Permutations I, with small adjustment:
 * - on each level we don't allow running for same number and use Set to prevent that.
 */

var permuteUnique = function (nums) {
  const results = [];

  backtrack([], nums);

  function backtrack(result, next) {
    if (!next.length) {
      results.push(result);
    }

    const visited = new Set();
    for (let i = 0; i < next.length; i++) {
      if (!visited.has(next[i])) {
        const newNext = next.slice();
        newNext.splice(i, 1);
        visited.add(next[i]);
        backtrack([...result, next[i]], newNext);
      }
    }
  }

  return results;
};
