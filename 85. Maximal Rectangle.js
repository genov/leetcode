/**
 * 85. Maximal Rectangle (hard)
 * https://leetcode.com/problems/maximal-rectangle/
 */
var maximalRectangle = function (matrix) {
  let maxRectangle = 0;

  // Return 0 if empty.
  if (!matrix.length || !matrix[0].length) {
    return 0;
  }

  // Calc max rectange area from each matrix element.
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === "1") {
        const area = calcRectangle(row, col);
        maxRectangle = Math.max(maxRectangle, area);
      }
    }
  }

  return maxRectangle;

  function calcRectangle(row, col) {
    let currentCol = col;
    let height = Number.MAX_VALUE;
    let width = 0;
    let maxArea = 0;

    // Find max area: each width x (minimal height so far).
    while (currentCol < matrix[0].length && matrix[row][currentCol] === "1") {
      let currHeight = 0;
      let currentRow = row;

      // Calculate height for current column.
      while (
        currentRow < matrix.length &&
        matrix[currentRow][currentCol] === "1"
      ) {
        currHeight++;
        currentRow++;
      }

      height = Math.min(currHeight, height);
      width++;
      maxArea = Math.max(maxArea, height * width);
      currentCol++;
    }

    return maxArea;
  }
};
