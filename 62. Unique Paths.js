/**
 * 62. Unique Paths
 *
 * https://leetcode.com/problems/unique-paths/
 */

/** DP approach */
// Approach is based on idea that we fill each cell with number of unique paths getting to it.
// which is equal to left neibhor cell value + top neibhor cell value.
// Start setting first row to all 1 -> [1,1,1,1].
var uniquePaths = function (m, n) {
  const grid = [];
  grid[0] = new Array(n).fill(1);

  for (let row = 1; row < m; row++) {
    grid[row] = [];

    for (let col = 0; col < n; col++) {
      const top = grid[row - 1] ? grid[row - 1][col] : 0;
      const left = grid[row][col - 1] ? grid[row][col - 1] : 0;
      grid[row][col] = top + left;
    }
  }

  return grid[m - 1][n - 1];
};

/** DFS approach - Timeout */
var uniquePaths = function (m, n) {
  let paths = 0;

  traverse(0, 0);

  function traverse(row, col) {
    if (row >= m || col >= n || row < 0 || col < 0) {
      return;
    }

    if (row === m - 1 && col === n - 1) {
      paths++;
    }

    traverse(row + 1, col);
    traverse(row, col + 1);
  }

  return paths;
};
