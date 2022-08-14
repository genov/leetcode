/**
 * 46. Permutations
 * https://leetcode.com/problems/permutations/
 */

// Backtracking approach

// Run backtracking function which:
// takes current result andn next numbers to iterate.
// At each:
// - iterate over next numbers
// - for each next number add it to results copy
// - pass new results and next (without curretn number) to next backtrack call.

var permute = function (nums) {
  const results = []; // Keeps results

  backtrack([], nums);

  function backtrack(result, next) {
    if (!next.length) {
      results.push(result);
      return;
    }

    for (let i = 0; i < next.length; i++) {
      const newNext = next.slice();
      newNext.splice(i, 1);
      backtrack([...result, next[i]], newNext);
    }
  }

  return results;
};
