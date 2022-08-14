/**
 * 63. Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/
 */

var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
    return 0;
  }

  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      obstacleGrid[0][i] = -1;
    } else if (obstacleGrid[0][i - 1] === 0) {
      obstacleGrid[0][i] = 0;
    } else {
      obstacleGrid[0][i] = obstacleGrid[0][i - 1] === -1 ? 0 : 1;
    }
  }

  for (let row = 1; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const value = obstacleGrid[row][col];

      if (value === 1) {
        obstacleGrid[row][col] = -1;
      } else {
        const top =
          obstacleGrid[row - 1] && obstacleGrid[row - 1][col] !== -1
            ? obstacleGrid[row - 1][col]
            : 0;
        const left =
          obstacleGrid[row][col - 1] && obstacleGrid[row][col - 1] !== -1
            ? obstacleGrid[row][col - 1]
            : 0;

        obstacleGrid[row][col] = top + left;
      }
    }
  }

  return obstacleGrid[m - 1][n - 1];
};
