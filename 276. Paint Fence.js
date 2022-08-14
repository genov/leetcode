/**
 * 276. Paint Fence
 * https://leetcode.com/problems/paint-fence/
 */

/** DFS approach (timeout exceeded) */
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, k) {
  let ways = 0;
  dfs(0, 0, 0);

  function dfs(post, color, colorCount) {
    if (post === n) {
      ways++;
      return;
    }

    for (let i = 1; i <= k; i++) {
      if (color === i && colorCount == 2) {
        continue;
      }

      dfs(post + 1, i, i === color ? colorCount + 1 : 1);
    }
  }

  return ways;
};

/**
 * DP approach
 * https://leetcode.com/problems/paint-fence/discuss/178010/The-only-solution-you-need-to-read
 */
var numWays = function (n, k) {
  if (n === 1) {
    return k;
  }

  if (n === 2) {
    return k * k;
  }

  const table = [];
  table[0] = 0;
  table[1] = k;
  table[2] = k * k;

  for (let i = 3; i <= n; i++) {
    table[i] = (table[i - 1] + table[i - 2]) * (k - 1);
  }

  return table[n];
};
