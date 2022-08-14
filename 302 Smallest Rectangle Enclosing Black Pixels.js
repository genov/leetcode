/**
 *
 * 302. Smallest Rectangle Enclosing Black Pixels
 * https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/
 */

/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function (image, x, y) {
  const n = image.length;
  const m = image[0].length;
  let topLeft = [999, 999];
  let bottomRight = [0, 0];
  const visited = {};

  dfs(x, y);

  const height = Math.abs(bottomRight[0] - topLeft[0]) + 1;
  const width = Math.abs(bottomRight[1] - topLeft[1]) + 1;

  function dfs(x, y) {
    if (
      x >= n ||
      y >= m ||
      x < 0 ||
      y < 0 ||
      image[x][y] === "0" ||
      visited[x * m + y]
    ) {
      return;
    }

    if (x < topLeft[0]) {
      topLeft[0] = x;
    }

    if (y < topLeft[1]) {
      topLeft[1] = y;
    }

    if (x > bottomRight[0]) {
      bottomRight[0] = x;
    }

    if (y > bottomRight[1]) {
      bottomRight[1] = y;
    }

    visited[x * m + y] = true;

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  return height * width;
};
