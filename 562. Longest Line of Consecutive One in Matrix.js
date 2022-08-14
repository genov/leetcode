/**
 * 562. Longest Line of Consecutive One in Matrix
 *
 * https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/
 */

var longestLine = function (M) {
  if (!M.length) {
    return 0;
  }

  const rows = M.length;
  const cols = M[0].length;

  let longestLine = 0;

  const counts = new Array(rows)
    .fill()
    .map(() => new Array(cols).fill().map(() => [0, 0, 0, 0]));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (M[row][col] === 1) {
        counts[row][col] = checkNeibhours(row, col);
        longestLine = Math.max(...counts[row][col], longestLine);
      }
    }
  }

  return longestLine;

  function checkNeibhours(row, col) {
    const left = counts[row][col - 1] || [0, 0, 0, 0];
    const top = (counts[row - 1] && counts[row - 1][col]) || [0, 0, 0, 0];
    const leftTop = (counts[row - 1] && counts[row - 1][col - 1]) || [
      0,
      0,
      0,
      0,
    ];
    const rightTop = (counts[row - 1] && counts[row - 1][col + 1]) || [
      0,
      0,
      0,
      0,
    ];

    return [left[0] + 1, top[1] + 1, leftTop[2] + 1, rightTop[3] + 1];
  }
};
