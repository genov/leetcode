/**
 * 329. Longest Increasing Path in a Matrix
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 */

function findLongestPath(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const visited = {};
  let maxPath = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      const current = dfs(row, col);
      maxPath = Math.max(current, maxPath);
    }
  }

  return maxPath;

  function dfs(row, col, prev) {
    if (row >= n || col >= m || row < 0 || col < 0) {
      return 0;
    }

    const el = matrix[row][col];
    if (prev >= 0 && el <= prev) {
      return 0;
    }

    if (visited[row * m + col]) {
      return visited[row * m + col];
    }

    const top = dfs(row - 1, col, el);
    const bottom = dfs(row + 1, col, el);
    const left = dfs(row, col - 1, el);
    const right = dfs(row, col + 1, el);

    visited[row * m + col] = Math.max(left, right, top, bottom) + 1;

    return visited[row * m + col];
  }
}
