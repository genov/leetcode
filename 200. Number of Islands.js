/**
 * 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 */

var numIslands = function (grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }

  let islandsCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        islandsCount += 1;
        dfs(row, col);
      }
    }
  }

  return islandsCount;

  function dfs(row, col) {
    if (
      row >= grid.length ||
      row < 0 ||
      col >= grid[0].length ||
      col < 0 ||
      grid[row][col] === "0"
    ) {
      return;
    }

    grid[row][col] = "0";

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }
};
