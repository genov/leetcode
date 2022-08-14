/**
 * 54. Spiral Matrix
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * https://leetcode.com/problems/spiral-matrix/
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 1) {
    return matrix[0];
  }

  const result = [];
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;
  let direction = 0;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    switch (direction) {
      // Right
      case 0: {
        for (let i = colStart; i <= colEnd; i++) {
          result.push(matrix[rowStart][i]);
        }
        rowStart++;
        break;
      }
      // Down
      case 1: {
        for (let i = rowStart; i <= rowEnd; i++) {
          result.push(matrix[i][colEnd]);
        }
        colEnd--;
        break;
      }
      // Left
      case 2: {
        for (let i = colEnd; i >= colStart; i--) {
          result.push(matrix[rowEnd][i]);
        }
        rowEnd--;
        break;
      }
      // Up
      case 3: {
        for (let i = rowEnd; i >= rowStart; i--) {
          result.push(matrix[i][colStart]);
        }
        colStart++;
        break;
      }
    }
    direction = (direction + 1) % 4; // Don't go over case 3.
  }

  return result;
};
