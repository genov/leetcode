/**
 * 695. Max Area of Island
 * https://leetcode.com/problems/max-area-of-island/
 */

var maxAreaOfIsland = function (grid) {
  let maxArea = 0;

  if (!grid.length || !grid[0].length) {
    return maxArea;
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        const area = dfs(row, col);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;

  function dfs(row, col) {
    if (
      row >= grid.length ||
      row < 0 ||
      col >= grid[0].length ||
      col < 0 ||
      grid[row][col] === 0
    ) {
      return 0;
    }

    grid[row][col] = 0;

    const top = dfs(row - 1, col);
    const bottom = dfs(row + 1, col);
    const left = dfs(row, col - 1);
    const right = dfs(row, col + 1);

    return 1 + top + bottom + left + right;
  }
};
