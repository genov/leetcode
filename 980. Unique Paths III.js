/**
 * 980. Unique Paths III
 *
 * https://leetcode.com/problems/unique-paths-iii/
 */

var uniquePathsIII = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const START = 1;
  const END = 2;
  const OBSTACLE = -1;
  const visited = {};
  let walks = 0;
  let non_obstacles = 0;
  let start_row = 0;
  let start_col = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const cell = grid[row][col];
      if (cell >= 0) {
        non_obstacles++;
      }

      if (cell === START) {
        start_row = row;
        start_col = col;
      }
    }
  }

  dfs(start_row, start_col, non_obstacles);

  return walks;

  function dfs(row, col, remains) {
    if (
      row < 0 ||
      col < 0 ||
      row > m - 1 ||
      col > n - 1 ||
      grid[row][col] === OBSTACLE ||
      visited[row + "-" + col]
    ) {
      return;
    }

    if (grid[row][col] === END && remains === 1) {
      walks++;
      return;
    }

    visited[row + "-" + col] = true;
    remains--;

    dfs(row + 1, col, remains);
    dfs(row - 1, col, remains);
    dfs(row, col + 1, remains);
    dfs(row, col - 1, remains);

    visited[row + "-" + col] = false;
  }
};
